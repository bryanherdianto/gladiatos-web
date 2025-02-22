import os
import re
import sys

# Regular expression to match Django's {% static %} tag
STATIC_TAG_REGEX = r'\{\%\s*static\s+\'(.*?)\'\s*\%\}'

def replace_static_tags(input_file_path, output_file_path, static_dir):
    """
    Replaces all occurrences of {% static 'path/to/file' %} in the input file
    with the absolute path to the file in the static directory, and writes
    the updated content to a new output file.
    """
    try:
        # Read the content of the input file
        with open(input_file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Replace {% static 'path/to/file' %} with the absolute path
        def replace_match(match):
            relative_path = match.group(1)  # Extract the path inside the static tag
            absolute_path = os.path.join(static_dir, relative_path).replace("\\", "/")  # Construct the full path
            return f'{absolute_path}'  # Return the updated path with one pair of quotes

        updated_content = re.sub(STATIC_TAG_REGEX, replace_match, content)

        # Write the updated content to the output file
        with open(output_file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)

        print(f"Processed: {input_file_path}")
        print(f"New file created: {output_file_path}")

    except Exception as e:
        print(f"Error processing {input_file_path}: {e}")

if __name__ == "__main__":
    # Check if the user provided the required arguments
    if len(sys.argv) < 4:
        print("Usage: python replace_static_tags.py <path_to_input_html_file> <path_to_output_html_file> <path_to_static_directory>")
        sys.exit(1)

    # Get the input file path, output file path, and static directory from the arguments
    input_file_path = sys.argv[1]
    output_file_path = sys.argv[2]
    static_dir = sys.argv[3]

    # Validate the input file path
    if not os.path.isfile(input_file_path):
        print(f"Error: Input file '{input_file_path}' does not exist.")
        sys.exit(1)

    # Validate the static directory
    if not os.path.isdir(static_dir):
        print(f"Error: Static directory '{static_dir}' does not exist.")
        sys.exit(1)

    # Process the specified HTML file and create a new output file
    replace_static_tags(input_file_path, output_file_path, static_dir)

    print("File processed successfully!")