
// ===== コース一覧 =====
const courses = [
  "マリオブラザーズサーキット", "トロフィーシティ", "シュポポコースター", "DK宇宙センター", "サンサンさばく", "ヘイホーカーニバル", "ワリオスタジアム", "キラーシップ", "DKスノーマウンテン", "ロゼッタ天文台", "アイスビルディング", "ワリオシップ", "ノコノコビーチ", "リバーサイドサファリ", "トロフィシティ", "ピーチスタジアム", "ピーチビーチ", "ソルティタウン", "ディノディノジャングル", "ハテナ神殿", "プクプクフォールズ", "ショーニューロード", "おばけシネマ", "ホネホネツイスター", "モーモーカントリー", "チョコマウンテン", "キノピオファクトリー", "クッパキャッスル", "どんぐりツリーハウス", "マリオサーキット", "ピーチスタジアム", "レインボーロード"
];

// ===== 保存 =====
const STORAGE_KEY = "mk_matrix_data";
const allData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

// ===== 表生成 =====
const matrix = document.getElementById("matrix");
const table = document.createElement("table");

// ヘッダ
const headerRow = document.createElement("tr");
headerRow.appendChild(document.createElement("th"));
courses.forEach(c => {
  const th = document.createElement("th");
  th.textContent = c;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// 本体
courses.forEach(start => {
  const tr = document.createElement("tr");

  const th = document.createElement("th");
  th.textContent = start;
  tr.appendChild(th);

  courses.forEach(goal => {
    const td = document.createElement("td");
    td.className = "cell empty";

    const key = `${start}→${goal}`;
    updateCell(td, key);

    // ===== 左クリック（入力）=====
    td.addEventListener("click", () => addResult(td, key));

    // ===== 右クリック（PC詳細）=====
    td.addEventListener("contextmenu", e => {
      e.preventDefault();
      showDetail(key, td);
    });

    // ===== 長押し（スマホ詳細）=====
    let pressTimer = null;

    td.addEventListener("touchstart", e => {
      pressTimer = setTimeout(() => {
        showDetail(key, td);
      }, 600); // 600ms 長押し
    });

    td.addEventListener("touchend", () => {
      clearTimeout(pressTimer);
    });

    td.addEventListener("touchmove", () => {
      clearTimeout(pressTimer);
    });

    tr.appendChild(td);
  });

  table.appendChild(tr);
});

matrix.appendChild(table);

// ===== 入力処理 =====
function addResult(cell, key) {
  const rankInput = prompt("順位を入力（1〜24）");
  if (!rankInput) return;

  const rank = Number(rankInput);
  if (rank < 1 || rank > 24 || Number.isNaN(rank)) {
    alert("1〜24で入力して");
    return;
  }

  const reason = prompt(rank <= 12 ? "勝因を入力" : "敗因を入力");
  if (!reason) return;

  if (!allData[key]) {
    allData[key] = { ranks: [], wins: [], loses: [] };
  }

  allData[key].ranks.push(rank);
  rank <= 12
    ? allData[key].wins.push(reason)
    : allData[key].loses.push(reason);

  save();
  updateCell(cell, key);
}

// ===== 表示更新 =====
function updateCell(cell, key) {
  const data = allData[key];
  if (!data || data.ranks.length === 0) {
    cell.textContent = "";
    cell.className = "cell empty";
    return;
  }

  const avg =
    data.ranks.reduce((a, b) => a + b, 0) / data.ranks.length;

  cell.textContent =
    `平均 ${avg.toFixed(1)}位\n` +
    `勝:${data.wins.length} 敗:${data.loses.length}`;

  cell.className = "cell";
  cell.classList.add(avg <= 12 ? "win" : "lose");
}

// ===== 詳細モーダル =====
function showDetail(key, cell) {
  const data = allData[key];
  if (!data) return;

  const modal = document.createElement("div");
  modal.className = "modal";

  const div = document.createElement("div");
  div.className = "modal-content";

  div.innerHTML = `
    <h3>${key}</h3>
    <p>順位履歴：${data.ranks.join(", ")}</p>
    <p>勝因</p>
    <ul>${data.wins.map(w => `<li>${w}</li>`).join("")}</ul>
    <p>敗因</p>
    <ul>${data.loses.map(l => `<li>${l}</li>`).join("")}</ul>
    <button id="delete">直近1件削除</button>
    <button id="close">閉じる</button>
  `;

  div.querySelector("#delete").onclick = () => {
    data.ranks.pop();
    if (data.wins.length >= data.loses.length) {
      data.wins.pop();
    } else {
      data.loses.pop();
    }
    save();
    updateCell(cell, key);
    modal.remove();
  };

  div.querySelector("#close").onclick = () => modal.remove();

  modal.appendChild(div);
  document.body.appendChild(modal);
}

// ===== 保存 =====
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
}