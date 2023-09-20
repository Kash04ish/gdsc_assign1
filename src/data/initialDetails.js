const initialDetails = [
    {
    "id": "1",
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "images": "data:image/jpeg;base64,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"
  },
  {
    "id": 2,
    "title": "iPhone X",
    "description":
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "images": "/src/components/images/iphonex.jpeg"
  },
  {
    "id": 3,
    "title": "Samsung Universe 9",
    "description":
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    "images": "/src/components/images/Samsung Universe 9.webp"
  },
  {
    "id": 4,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "images": "/src/components/images/OPPOF19.webp"
  },
  {
    "id": 5,
    "title": "Huawei P30",
    "description":
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
   " images": "/src/components/images/Huawei P30.jpg"
  },
  {
    "id": 6,
    "title": "MacBook Pro",
    "description":
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "images": "/src/components/images/MacBook Pro.jpg"
  },
  {
    "id": 7,
    "title": "Samsung Galaxy Book",
    "description":
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
   " images": "/src/components/images/Samsung Galaxy Book.jpg"
  },
  {
    "id": 8,
    "title": "Microsoft Surface Laptop 4",
    "description":
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    "images": "/src/components/images/Microsoft Surface Laptop 4.jpg"
  }
]

  
  export default initialDetails;