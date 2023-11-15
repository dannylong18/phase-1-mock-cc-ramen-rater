// write your code here
document.addEventListener('DOMContentLoaded', () => {
    
    function renderPictureAddClick (element) {
        let imgDiv = document.getElementById('ramen-menu')
            let ramenImg = document.createElement('img')
            ramenImg.src = element.image
            ramenImg.alt = 'Picture of Ramen'
            imgDiv.appendChild(ramenImg)

            ramenImg.addEventListener('click', (e) => {
                let detailImage = document.querySelector('.detail-image')
                detailImage.src = element.image

                let ramenName = document.querySelector('.name')
                ramenName.textContent = element.name

                let ramenRestaurant = document.querySelector('.restaurant')
                ramenRestaurant.textContent = element.restaurant 

                let rating = document.getElementById('rating-display')
                rating.textContent = element.rating

                let comment = document.getElementById('comment-display')
                comment.innerText = element.comment
            })
    }

    fetch ('http://localhost:3000/ramens')
    .then ((resp) => resp.json())
    .then ((data) => {
        data.forEach(element => {
            renderPictureAddClick(element)
        });
    })

    let form = document.getElementById('new-ramen')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let newName = document.getElementById('new-name').value
        let newRestaurant = document.getElementById('new-restaurant').value
        let newImage = document.getElementById('new-image').value
        let newRating = document.getElementById('new-rating').value
        let newComment = document.getElementById('new-comment').value

        let newObj = {}

        newObj.name = newName
        newObj.restaurant = newRestaurant
        newObj.image = newImage
        newObj.rating = newRating
        newObj.comment = newComment
        renderPictureAddClick(newObj)

        form.reset()
    })

})