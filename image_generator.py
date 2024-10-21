from PIL import Image, ImageDraw, ImageFont

# Load the uploaded image
image_path = "devclothes.webp"
img = Image.open(image_path)


# Save the modified image
output_corrected_path = "corrected_devclothesshop_logo.png"
img.save(output_corrected_path)

output_corrected_path
