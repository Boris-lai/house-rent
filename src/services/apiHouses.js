import supabase, { supabaseUrl } from "./supabase";

export async function getHouses() {
  const { data, error } = await supabase.from("houses").select("*");

  if (error) {
    console.error(error);
    throw new Error("Houses could not be loaded");
  }

  return data;
}

export async function getHouse(id) {
  let { data, error } = await supabase.from("houses").select().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("House could not be found");
  }

  return data;
}

// ----- 創建房屋物件 -----//
export async function createEditHouse(newHouse, id) {
  // 用來判斷是否有圖片路徑
  const hasImagePath = newHouse.images[0]?.startsWith?.(supabaseUrl);

  // 用來儲存如果一個房屋的物件有多張圖片的話
  let houseImages = [];

  for (var i = 0; i < newHouse.images.length; i++) {
    // 圖片名稱
    const imageName = `${Math.random()}-${newHouse.images[i].name}`.replaceAll(
      "/",
      ""
    );

    // 圖片路徑
    const imagePath = hasImagePath
      ? newHouse.images[0]
      : `${supabaseUrl}/storage/v1/object/public/house-images/${imageName}`;

    //如果已經有圖片路徑就直接回傳 data 就好
    // if (hasImagePath) return data;

    if (!hasImagePath) {
      // 上傳圖片
      const { error: storageError } = await supabase.storage
        .from("house-images")
        .upload(imageName, newHouse.images[i]); // 👈 第二個參數是實際的圖像

      // 上傳圖片如果有錯誤的話，就刪除當下創建的 "house"
      if (storageError) {
        await supabase.from("houses").delete().eq("id", data.id);
        console.log(storageError);
        throw new Error(
          "Houses image could not be uploaded and the house was not created"
        );
      }
    }

    houseImages.push(imagePath);
  }

  let query = supabase.from("houses");

  // // A) CREATE (在沒有id參數傳進的情況下，創建新房屋)
  if (!id) query = query.insert([{ ...newHouse, images: houseImages }]);

  // B) EDIT (只是編輯選定房屋的物件)
  if (id)
    query = query.update({ ...newHouse, images: houseImages }).eq("id", id);

  const { data, error } = await query.select().single(); // 新元素從陣列中取出;

  if (error) {
    console.log(error);
    throw new Error("無法創建房屋物件!");
  }

  return data;
}

export async function deleteHouse(id) {
  const { data, error } = await supabase.from("houses").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Houses could not be deleted");
  }

  return data;
}
