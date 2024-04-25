import { exit } from "process"

export function constructOutputFile(outputPath: string) {
    // creates a new text file and appends it to the output path variable
    return outputPath
}
    

export function constructInputMapPath(gameName: string) {
    // takes the game name and appends it to the end of the input-map directory
    const path = '../Data/Input-Maps/' + gameName + '.json/'
    return path
}

export function addFramePadding(padding: number) {
    return " W" + padding + " "
}
    

export function interpretInput(token: string, inputMap: JSON)  {
    // first we need to check if it has a comma, if it does then it needs to be interpretted differently
    if(token.includes(',')) {
        // this way we can interpret the two or more tokens in here differently then others
        const subArray = token.split(',')

        subArray.forEach(input => {
            // this checks if the token is a key in the input map, if it is then the token is replaced with its translated value 
            interpretInputHelper(input, inputMap)
        });
        // rejoin the subarray and replace commas with W10 to make it usable by eddieinput
        token = subArray.join(addFramePadding(10))
    }
    // this checks if the token is a key in the input map, if it is then the token is replaced with its translated value
    else {
        token = interpretInputHelper(token, inputMap)
    }

    // return an error in the else

    return token
}
export function interpretInputHelper(token: string, inputMap: JSON)  {
    if(inputMap[token] != undefined){
        token = inputMap[token]
        return token
    }
    else {
        console.log('Token not valid. Token = ' + token)
        exit()
        
    }
}


export function constructStartRecording(trainingModeReset: string, framePadding: string) {
    const startRecording = ' ' + trainingModeReset + ' ' + framePadding + ' START_RECORD ' + framePadding + '\n'
    return startRecording
}
export function constructEndRecording(framePadding: string)  {
    return ' ' + framePadding + ' END_RECORD \n'
}