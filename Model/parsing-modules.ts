export function constructOutputFile(outputPath: string) {
    // creates a new text file and appends it to the output path variable
    return outputPath
}
    

export function constructInputMapPath(gameName: string) {
    // takes the game name and appends it to the end of the input-map directory
    const path = '../Data/Input-Maps/' + gameName + '.json/'
    return path
}

export function addFramePadding(padding: string) {
    return " W" + padding + " "
}
    

export function interpretInput(token: string, inputMap: JSON)  {


    // this should take an input token, see if it's in the complex or simple input map, if it's in the simple map it just returns the key, if it's in the complex it returns the corresponding value

    // check if token is in simple map, if it is then just use the key

    // check if token is in complex map, if it is then use the value

    // if it's not in either and contains a comma then it needs to be interpretted differently to handle that comma
    if(token.includes(',')) {
        token.replace(',', ' W10 ')
    }

    // return an error in the else

    return token
}

export function constructStartRecording(trainingModeReset: string, framePadding: string) {
    const startRecording = ' ' + trainingModeReset + ' ' + framePadding + ' START_RECORD ' + framePadding + '\n'
    return startRecording
}
export function constructEndRecording(framePadding: string)  {
    return ' ' + framePadding + ' END_RECORD \n'
}