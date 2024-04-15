# Eddie Input Move Recorder 
- Takes in fighting game move lists and parses their notation to work with Eddie Input for the purpose of making small recordings of moves with OBS
- Currently only has plans to work with Tekken, but other games can be implemented in a very similar way


## Example Input
### Input
- DEW 1+3
- f, N, d, df+3
- SCR 2
- 1, 2, 3
### Output
- START_RECORDING
- W[30]
- d d/f f W[10] 3+4 //dew glide
- W[30]
- END_RECORDING
- select+3 f//training mode reset button
- W[30]
- START_RECORDING
- W[30]
- f w[1] d d/f+3 //electric 3
- END_RECORDING
- select+3 f
- W[30]
- u+3+4 W[10] 2 //scarecrow stance
- W[30]
- END_RECORDING
- select+3 f//training mode reset button
- W[30]
- START_RECORDING
- W[30]
- 1 W[10] 2 W[10] 3 W[10] //1, 2, 3
- W[30]
- END_RECORDING
- select+3 f//training mode reset button
- W[30]

## 🐖
