document.getElementById("loadImageButton").addEventListener("click", function() {
  const imageContainer = document.getElementById("imageContainer");

  // 既存の画像を削除する（再読み込み時のため）
  imageContainer.innerHTML = "";

  // 新しい画像要素を作成
  const img = document.createElement("img");
  img.src = "https://via.placeholder.com/600x400?text=Sample+Image"; // 画像URLを指定
  img.alt = "サンプル画像";

  // 画像をコンテナに追加
  imageContainer.appendChild(img);
});
