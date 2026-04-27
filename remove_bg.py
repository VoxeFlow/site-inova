from PIL import Image, ImageDraw

def process_favicon(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    center = (width // 2, height // 2)
    
    # Use 49% of width as radius to be 1:1 square-ish and centered
    # 3210 * 0.49 is roughly 1572
    radius = int(width * 0.49)
    
    mask = Image.new("L", (width, height), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius), fill=255)
    
    new_img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    new_img.paste(img, (0, 0), mask=mask)
    
    # Save as 512x512 finally
    new_img = new_img.resize((512, 512), resample=Image.Resampling.LANCZOS)
    new_img.save(output_path, "PNG")

if __name__ == "__main__":
    process_favicon("tmp-assets/favicon-square-source.png", "src/app/icon.png")
    # Also save as apple-icon.png
    img = Image.open("src/app/icon.png")
    img.save("src/app/apple-icon.png")
    print("Favicon processed with corrected LARGE circular mask and Lanczos resize.")
