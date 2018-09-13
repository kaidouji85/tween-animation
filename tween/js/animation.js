/**
 * キャラクターをアニメーションさせる
 *
 * @param {Pos} キャラクター座標
 * @return {Tween} アニメーション
 */
export function animation(pos) {
  const t1 = new TWEEN.Tween(pos)
    .to({x: 300}, 1000);
  const t2 = new TWEEN.Tween(pos)
    .to({y: 300}, 1000);
  const t3 = new TWEEN.Tween(pos)
    .to({x: 0}, 1000);
  const t4 = new TWEEN.Tween(pos)
    .to({y: 0}, 1000);

  t1.chain(t2);
  t2.chain(t3);
  t3.chain(t4);
  t4.chain(t1);

  return t1;
}