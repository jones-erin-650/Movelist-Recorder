import Modules
import os

def main():
    
    # first we need to ask for the input files
    inputFile = Modules.inputInputFile()
    outputPath = Modules.inputOutputPath()
    characterName = Modules.inputCharacterName()
    outputFileName = Modules.inputOutputFileName()

    # need to make a new output file that we will write to
    outputFile = os.path.join(outputPath, outputFileName)

    with open(outputFile, 'w') as fp:
        print('created file', outputFile)



    # a loop to go line by line through the input file and interpret what is written, then output to the output an eddie-input readable translation to the output file 
    with open(inputFile) as file:
        for line in file:
            # loop body
            # open the output file
            f = open(outputFile, "a")
            f.write("Hello!")


            # close output file
            f.close
            


if __name__=="__main__": 
    main() 