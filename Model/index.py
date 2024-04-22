import os
from pathlib import Path

def constructOutputFile(outputPath):
    # creates a new text file and appends it to the output path variable
    return outputPath

def constructInputMapPath(gameName):
    # takes the game name and appends it to the end of the input-map directory
    gameName = gameName + '.json'

    path = (Path('..') / 'Data' / 'Input-Maps' / gameName)
    return path

def addFramePadding(padding):
    return " W" + padding + " "

def interpretInput(input):
    # this should take an input token, see if it's in the complex or simple input map, if it's in the simple map it just returns the key, if it's in the complex it returns the corresponding value
    return input

def constructStartRecording(trainingModeReset, framePadding):
    startRecording = ' ' + trainingModeReset + ' ' + framePadding + ' START_RECORD ' + framePadding + '\n'
    return startRecording

def constructEndRecording(framePadding):
    return ' ' + framePadding + ' END_RECORD \n'

def main():
    userInputsPath = ''

    inputMapPath = constructInputMapPath('tekken')
    # import the json files here: 
    

    # from the input variables file we need input file, output file path, game name, and the training mode reset button
    

    # from the input map we need the  string_parser character 


    # strings to start and end a recording in eddieinput 
    startRecording = constructStartRecording('select+3', 'W120')
    endRecording = constructEndRecording('W60')
    

    inputFile = os.path.abspath('D:/New Desktop on Hard drive/CS Stuff/Self Done Projects/Input Recorder/Eddie-Input-Move-Recorder/Tests/Test-Inputs/nicer_devil_jin.txt')
    
    outputFile = os.path.abspath('D:/New Desktop on Hard drive/CS Stuff/Self Done Projects/Input Recorder/Eddie-Input-Move-Recorder/Tests/Test-Outputs/test_output.txt')

    # open the output file
    f = open(outputFile, "a")

    # a loop to go line by line through the input file and interpret what is written, then output an eddie-input readable translation to the output file 
    with open(inputFile) as file:
        for line in file:
            # loop body
            

            # reset training mode & start recording

            f.write(startRecording)

            # break the line into a subarray1 at the string_parser (comma, greater than, etc)

            subArrayComma = line.split(',')

            # break that subarray2 into another subarray at the +

            subArrayPlus = subArrayComma.split('+')
            print(subArrayPlus)

            #go through that subarray and interpret the tokens

            # join subarray2 with + again

            #join subarray1 with the string_parser

            # f.write(replacementLine)

            # end recording
            f.write(endRecording)

            # close output file
            f.close
            
if __name__=="__main__": 
    main() 