import os
import shutil

def copyInputFile(sourcePath, destinationFolder):
    try:
        # Check if the source file exists
        if not os.path.exists(sourcePath):
            print("Source file does not exist.")
            return

        # Create the destination folder if it doesn't exist
        if not os.path.exists(destinationFolder):
            os.makedirs(destinationFolder)

        # Extract the filename from the source path
        fileName = os.path.basename(sourcePath)

        # Construct the destination path
        destinationPath = os.path.join(destinationFolder, fileName)

        # Copy the file to the destination folder
        shutil.copyfile(sourcePath, destinationPath)

        print(f"File '{fileName}' copied successfully to '{destinationFolder}'.")

        # Rename the output file

        os.rename(destinationPath, "Copy_Of_" + destinationPath)

    except Exception as e:
        print(f"An error occurred: {e}")