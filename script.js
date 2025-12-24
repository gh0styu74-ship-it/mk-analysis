// ===== ルート定義 =====
const routes = {
  "マリオブラザーズサーキット": ["トロフィーシティ","シュポポコースター","サンサンさばく","ヘイホーカーニバル","ワリオスタジアム","チョコマウンテン","キノピオファクトリー"],
  "トロフィーシティ": ["マリオブラザーズサーキット","シュポポコースター","DK宇宙センター","サンサンさばく","ワリオスタジアム","ノコノコビーチ","リバーサイドサファリ","ピーチスタジアム","モーモーカントリー","チョコマウンテン"],
  "シュポポコースター": ["マリオブラザーズサーキット","トロフィーシティ","DK宇宙センター","サンサンさばく","ノコノコビーチ","チョコマウンテン"],
  "DK宇宙センター": ["マリオブラザーズサーキット","トロフィーシティ","シュポポコースター","サンサンさばく","ノコノコビーチ","ピーチスタジアム"],
  "サンサンさばく": ["マリオブラザーズサーキット","トロフィーシティ","シュポポコースター","ヘイホーカーニバル","ノコノコビーチ"],
  "ヘイホーカーニバル": ["マリオブラザーズサーキット","サンサンさばく","ワリオスタジアム","キラーシップ","チョコマウンテン"],
  "ワリオスタジアム": ["マリオブラザーズサーキット","トロフィーシティ","ヘイホーカーニバル","キラーシップ","ホネホネツイスター","チョコマウンテン","キノピオファクトリー","クッパキャッスル"],
  "キラーシップ": ["ヘイホーカーニバル","ワリオスタジアム","ホネホネツイスター","キノピオファクトリー","クッパキャッスル"],
  "DKスノーマウンテン": ["ロゼッタ天文台","アイスビルディング","ワリオシップ","ソルティタウン","プクプクフォールズ","ショーニューロード","モーモーカントリー"],
  "ロゼッタ天文台": ["DKスノーマウンテン","アイスビルディング","ワリオシップ","プクプクフォールズ","ショーニューロード","おばけシネマ","マリオサーキット"],
  "アイスビルディング": ["DKスノーマウンテン","ロゼッタ天文台","ワリオシップ","ソルティタウン","プクプクフォールズ","ショーニューロード"],
  "ワリオシップ": ["DKスノーマウンテン","ロゼッタ天文台","アイスビルディング","ピーチビーチ","ソルティタウン","プクプクフォールズ"],
  "ノコノコビーチ": ["トロフィーシティ","DK宇宙センター","リバーサイドサファリ","ピーチスタジアム","ディノディノジャングル"],
  "リバーサイドサファリ": ["トロフィーシティ","ノコノコビーチ","ピーチスタジアム","ピーチビーチ","ソルティタウン","ディノディノジャングル","ハテナ神殿","プクプクフォールズ"],
  "ピーチスタジアム": ["トロフィーシティ","ノコノコビーチ","リバーサイドサファリ","プクプクフォールズ","モーモーカントリー","チョコマウンテン","キノピオファクトリー","レインボーロード"],
  "ピーチビーチ": ["ワリオシップ","リバーサイドサファリ","ソルティタウン","ディノディノジャングル","ハテナ神殿"],
  "ソルティタウン": ["DKスノーマウンテン","ワリオシップ","リバーサイドサファリ","ピーチビーチ","ディノディノジャングル","ハテナ神殿","プクプクフォールズ"],
  "ディノディノジャングル": ["ノコノコビーチ","リバーサイドサファリ","ピーチビーチ","ソルティタウン","ハテナ神殿"],
  "ハテナ神殿": ["ノコノコビーチ","リバーサイドサファリ","ピーチビーチ","ソルティタウン","ディノディノジャングル"],
  "プクプクフォールズ": ["DKスノーマウンテン","ロゼッタ天文台","ワリオシップ","リバーサイドサファリ","ピーチスタジアム","ソルティタウン","ショーニューロード","モーモーカントリー","チョコマウンテン"],
  "ショーニューロード": ["DKスノーマウンテン","ロゼッタ天文台","アイスビルディング","プクプクフォールズ","おばけシネマ","モーモーカントリー","キノピオファクトリー","どんぐりツリーハウス","マリオサーキット"],
  "おばけシネマ": ["ロゼッタ天文台","ショーニューロード","ホネホネツイスター","どんぐりツリーハウス","マリオサーキット"],
  "ホネホネツイスター": ["ワリオスタジアム","キラーシップ","おばけシネマ","モーモーカントリー","キノピオファクトリー","クッパキャッスル","どんぐりツリーハウス","マリオサーキット"],
  "モーモーカントリー": ["トロフィーシティ","DKスノーマウンテン","ピーチスタジアム","プクプクフォールズ","ショーニューロード","ホネホネツイスター","チョコマウンテン","キノピオファクトリー","マリオサーキット"],
  "チョコマウンテン": ["マリオブラザーズサーキット","トロフィーシティ","シュポポコースター","ヘイホーカーニバル","ワリオスタジアム","ピーチスタジアム","プクプクフォールズ","モーモーカントリー","キノピオファクトリー","クッパキャッスル"],
  "キノピオファクトリー": ["マリオブラザーズサーキット","ワリオスタジアム","キラーシップ","ピーチスタジアム","ショーニューロード","ホネホネツイスター","モーモーカントリー","チョコマウンテン","クッパキャッスル","どんぐりツリーハウス","マリオサーキット"],
  "クッパキャッスル": ["ワリオスタジアム","キラーシップ","ホネホネツイスター","チョコマウンテン","キノピオファクトリー","マリオサーキット"],
  "どんぐりツリーハウス": ["ショーニューロード","おばけシネマ","ホネホネツイスター","キノピオファクトリー","マリオサーキット"],
  "マリオサーキット": ["ロゼッタ天文台","ピーチスタジアム","ショーニューロード","おばけシネマ","ホネホネツイスター","モーモーカントリー","キノピオファクトリー","クッパキャッスル","どんぐりツリーハウス"],
  "レインボーロード": []
};


const STORAGE_KEY = "mk_matrix_data";
const allData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const startSelect = document.getElementById("startSelect");
const goalSelect = document.getElementById("goalSelect");
const rankInput = document.getElementById("rankInput");
const winReason = document.getElementById("winReason");
const loseReason = document.getElementById("loseReason");
const addBtn = document.getElementById("addBtn");
const matrixDiv = document.getElementById("matrix");

const starts = Object.keys(routes);

// スタート選択肢
starts.forEach(s => {
  const option = document.createElement("option");
  option.value = s;
  option.textContent = s;
  startSelect.appendChild(option);
});

// ゴール選択肢更新
startSelect.addEventListener("change", ()=>{
  const s = startSelect.value;
  goalSelect.innerHTML = "";
  routes[s].forEach(g=>{
    const option = document.createElement("option");
    option.value = g;
    option.textContent = g;
    goalSelect.appendChild(option);
  });
});

// 記録追加
addBtn.addEventListener("click", ()=>{
  const s = startSelect.value;
  const g = goalSelect.value;
  const rank = Number(rankInput.value);
  const win = winReason.value.trim();
  const lose = loseReason.value.trim();
  if(!s||!g||!rank) { alert("入力不十分"); return; }

  const key = `${s}→${g}`;
  if(!allData[key]) allData[key]={ranks:[],wins:[],loses:[]};
  allData[key].ranks.push(rank);
  if(rank<=12 && win) allData[key].wins.push(win);
  if(rank>12 && lose) allData[key].loses.push(lose);
  save();
  renderMatrix();
});

// 保存
function save(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
}

// 表描画
function renderMatrix(){
  matrixDiv.innerHTML="";
  const table = document.createElement("table");

  const headerRow = document.createElement("tr");
  headerRow.appendChild(document.createElement("th"));
  starts.forEach(s=>{
    const th = document.createElement("th");
    th.textContent=s;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  starts.forEach(start=>{
    const tr=document.createElement("tr");
    const th=document.createElement("th");
    th.textContent=start;
    tr.appendChild(th);

    starts.forEach(goal=>{
      const td=document.createElement("td");
      const key = `${start}→${goal}`;
      const data = allData[key];
      if(data && data.ranks.length){
        const avg = data.ranks.reduce((a,b)=>a+b,0)/data.ranks.length;
        td.textContent=`${avg.toFixed(1)}位\n勝:${data.wins.length} 敗:${data.loses.length}`;
        td.style.backgroundColor=rankToColor(avg);
        td.className="cell";
      }else{
        td.className="cell";
        td.textContent="";
      }

      // 右クリック/長押しで詳細表示
      td.addEventListener("contextmenu", e=>{
        e.preventDefault();
        showDetail(key,td);
      });
      let pressTimer=null;
      td.addEventListener("touchstart", e=>{
        pressTimer=setTimeout(()=>showDetail(key,td),600);
      });
      td.addEventListener("touchend",()=>clearTimeout(pressTimer));
      td.addEventListener("touchmove",()=>clearTimeout(pressTimer));

      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  matrixDiv.appendChild(table);
}

// 勝敗詳細表示
function showDetail(key,cell){
  const data = allData[key];
  if(!data) return;
  const modal = document.createElement("div");
  modal.className="modal";
  const div=document.createElement("div");
  div.className="modal-content";

  div.innerHTML=`<h3>${key}</h3>
  <p>順位履歴: ${data.ranks.join(", ")}</p>
  <p>勝因<ul>${(data.wins||[]).map(w=>`<li>${w}</li>`).join("")}</ul></p>
  <p>敗因<ul>${(data.loses||[]).map(l=>`<li>${l}</li>`).join("")}</ul>
  <button id="delete">直近1件削除</button>
  <button id="close">閉じる</button>`;

  div.querySelector("#delete").onclick=()=>{
    data.ranks.pop();
    if(data.wins.length>=data.loses.length) data.wins.pop();
    else data.loses.pop();
    save();
    renderMatrix();
    modal.remove();
  };
  div.querySelector("#close").onclick=()=>modal.remove();
  modal.appendChild(div);
  document.body.appendChild(modal);
}

// 平均順位→色（雨雲レーダー風）
function rankToColor(rank){
  if(rank<=3) return "#0033FF";
  if(rank<=6) return "#3399FF";
  if(rank<=12) return "#99CCFF";
  if(rank<=18) return "#FF9999";
  if(rank<=21) return "#FF3333";
  return "#CC0000";
}

// 初回描画
renderMatrix();