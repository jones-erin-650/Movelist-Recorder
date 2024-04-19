# need to make a new output file that we will write to
    
def main():

    # hardcoded for now, definitely shouldn't be
    startRecording = ' select+3 W120 f W10 START_RECORD W60'
    endRecording = ' W60 END_RECORD '
    inputFile = '../Tests/Test-Inputs/nicer_devil_jin.txt'
    outputFile = '../Tests/Test-Outputs/test_output.txt'
    # a loop to go line by line through the input file and interpret what is written, then output to the output an eddie-input readable translation to the output file 
    with open('D:/New Desktop on Hard drive/CS Stuff/Self Done Projects/Input Recorder/Eddie-Input-Move-Recorder/Tests/Test-Inputs/nicer_devil_jin.txt') as file:
        for line in file:
            # loop body
            # open the output file
            f = open('D:/New Desktop on Hard drive/CS Stuff/Self Done Projects/Input Recorder/Eddie-Input-Move-Recorder/Tests/Test-Outputs/test_output.txt', "a")

            # reset training mode & start recording

            f.write(startRecording)
            f.write('\n')

            # replace the commas with frame padding

            replacementLine = line.replace(',', ' W10 ')

            # now we have to split at the +'s and interpret stances and complex inputs

            f.write(replacementLine)
            f.write('\n')

            # end recording
            f.write(endRecording)
            f.write('\n')

            # close output file
            f.close
            
if __name__=="__main__": 
    main() 