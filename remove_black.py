from PIL import Image
import sys

def make_black_transparent(image_path, output_path, threshold=15):
    try:
        img = Image.open(image_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # Check if pixel is dark enough
            if item[0] < threshold and item[1] < threshold and item[2] < threshold:
                newData.append((0, 0, 0, 0)) # Transparent
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    in_path = r"C:\Users\nahid\.gemini\antigravity-ide\brain\8c0efb78-5ac8-4b41-b610-796ef6e6a63e\developer_black_bg_1783108501833.png"
    out_path = r"c:\personal_work\portfolio\public\hero-illustration-transparent.png"
    make_black_transparent(in_path, out_path)
