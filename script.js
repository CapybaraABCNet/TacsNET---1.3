
        const im = [
            "https://i.pinimg.com/736x/31/9d/08/319d084e36983e51b5ca7447322dea68.jpg",
            "https://i.pinimg.com/736x/aa/14/54/aa1454c0bb69498c763f791352ddd274.jpg",
            "https://i.pinimg.com/736x/d3/d9/4f/d3d94f32b3f034d71ccff7ad3978eab8.jpg",
            "https://img.gazeta.ru/files3/727/18387727/shutterstock_1856255107-pic_32ratio_900x600-900x600-27878.jpg",
            "https://i.pinimg.com/736x/3c/f2/91/3cf2910a4701f54f2f35ff3015e3aa5f.jpg",
            "https://image.petmd.com/files/inline-images/dachshund-4.jpg?VersionId=bhrmbaqTi06GazW7eI8psvESrb0XlQH6"
        ];

        function getRandom() {
            const randomIm = Math.floor(Math.random() * im.length);
            return im[randomIm]; 
        }

        // Устанавливаем начальное изображение
        document.getElementById('randomImage').src = getRandom();

        // Добавляем обработчик события для кнопки
        document.getElementById('newImageButton').addEventListener('click', function() {
            document.getElementById('randomImage').src = getRandom();
        });