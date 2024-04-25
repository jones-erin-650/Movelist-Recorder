const fs = require('fs')
const readline = require('readline')

// need to do this since the readline module only works with readable streams
const file = readline.createInterface({
    // HARDCODED
    input: fs.createReadStream('../Tests/Test-Inputs/nicer_devil_jin.txt'),
    output: process.stdout,
    terminal: false
})

// importing functions
import { constructStartRecording, constructEndRecording, interpretInput } from '../parsing-modules'

export function tekkenFileParser(inputFile: string, outputFile: string, jsonData: JSON) {
    // strings to start and end a recording in eddieinput 
    const startRecording = constructStartRecording('select+3', 'W120')
    const endRecording = constructEndRecording('W60')

    // import the json data here: 
    const inputMapData = JSON.parse('../../input-maps/tekken.json')


    // a loop to go line by line through the input file and interpret what is written, then output an eddie-input readable translation to the output file 

    file.on('line', (line: string) => {
        let replacementLine
        // loop body
            
    
        // reset training mode & start recording
    
        fs.appendFile(outputFile, startRecording)
    
        // break the line into a subarray1 at the string_parser (comma, greater than, etc)
        let subArray = line.split('+')
        
        //go through that subarray and interpret the tokens
        subArray.forEach( token => {
            token = interpretInput(token, inputMapData)
        })    
    
        // join the array with the +
        replacementLine = subArray.join('+')
    
        //join subarray1 with the string_parser
    
        fs.appendFile(replacementLine)
    
        // end recording
        fs.appendFile(endRecording)
    
        // close output file
        fs.close()
    })
}

