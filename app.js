fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(json => {
        const image = document.createElement("img")
        // image.src = json[15].image
        image.classList.add("image")
        document.body.append(image)
        let num = 0
        function next() {
            num++
            if (num <= json.length) {
                image.src = json[num].image
            }
        }
        next()
        
        image.addEventListener("click" , next);
        next()
        
        function next() {
            num++;
            if (num < json.length) {
                image.src = json[num].image;
            } else {
                num = 0; 
                image.src = json[num].image;
            }
        }

        image.addEventListener("click", previous); 
    })
