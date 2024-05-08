/*
@title: A Random Idea hidden by Chaos
@author: MichaelPanait
@snapshot: 1.png
*/

const width = 120
const height = 87

setDocDimensions(width, height)

const lm1 = 13
const lm2 = 89
const nlm1 = 82
const nlm2 = 3
const times = 140

for (let i = 0; i < times; i++) {
const rv1 = bt.randInRange(lm1, lm2)
const rv2 = bt.randInRange(lm1, lm2)
const rv3 = bt.randInRange(lm1, lm2)
const rv4 = bt.randInRange(lm1, lm2)


const curve = bt.catmullRom([[rv1, rv2], [rv2, rv4], [rv3, rv1], [rv4, rv3]])

  drawLines([curve])
}

for (let i = 0; i < times; i++) {
const nrv1 = bt.randInRange(nlm1, nlm2)
const nrv2 = bt.randInRange(nlm1, nlm2)
const nrv3 = bt.randInRange(nlm1, nlm2)
const nrv4 = bt.randInRange(nlm1, nlm2)


const curve = bt.catmullRom([[nrv1, nrv2], [nrv2, nrv4], [nrv3, nrv1], [nrv4, nrv3]])

  drawLines([curve])
}


