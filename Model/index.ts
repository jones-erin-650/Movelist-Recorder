const fs = require('fs')
const readline = require('readline')

// need to do this since the readline module only works with readable streams
const file = readline.createInterface({
    input: fs.createReadStream('source_to_file'),
    output: process.stdout,
    terminal: false
})

export function constructOutputFile(outputPath: string) {
    // creates a new text file and appends it to the output path variable
    return outputPath
}
    

export function constructInputMapPath(gameName: string) {
    // takes the game name and appends it to the end of the input-map directory
    const path = '../Data/Input-Maps/' + gameName + '.json/'
    return path
}

export const addFramePadding(padding: string) => {
    return " W" + padding + " "
}
    

export const interpretInput(token: string) => {


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

export const constructStartRecording(trainingModeReset: string, framePadding: string) => {
    const startRecording = ' ' + trainingModeReset + ' ' + framePadding + ' START_RECORD ' + framePadding + '\n'
    return startRecording
}
export const constructEndRecording(framePadding: string) => {
    return ' ' + framePadding + ' END_RECORD \n'
}



const userInputPath = ''

// HARDCODED
const inputMapPath = constructInputMapPath('tekken')
// import the json files here: 


// from the input variables file we need input file, output file path, game name, and the training mode reset button


// from the input map we need the  string_parser character 




// HARDCODED
const inputFile = 'D:/New Desktop on Hard drive/CS Stuff/Self Done Projects/Input Recorder/Eddie-Input-Move-Recorder/Tests/Test-Inputs/nicer_devil_jin.txt'

// HARDCODED
const outputFile = 'D:/New Desktop on Hard drive/CS Stuff/Self Done Projects/Input Recorder/Eddie-Input-Move-Recorder/Tests/Test-Outputs/test_output.txt'



export function mainFileParser(inputFile: string, outputFile: string, stringParser: string) {
    // strings to start and end a recording in eddieinput 
    const startRecording = constructStartRecording('select+3', 'W120')
    const endRecording = constructEndRecording('W60')

    // a loop to go line by line through the input file and interpret what is written, then output an eddie-input readable translation to the output file 

    file.on('line', (line: string) => {
        let replacementLine
        // loop body
            
    
        // reset training mode & start recording
    
        fs.appendFile(outputFile, startRecording)
    
        // break the line into a subarray1 at the string_parser (comma, greater than, etc)
        // HARDCODED
        let subArray = line.split(stringParser)
        
            //go through that subarray and interpret the tokens
    
    
        // join the array with the +
        
    
        //join subarray1 with the string_parser
    
        fs.appendFile(replacementLine)
    
        // end recording
        fs.appendFile(endRecording)
    
        // close output file
        fs.close()
    })
}


        
        
