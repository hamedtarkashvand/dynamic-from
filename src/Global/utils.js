export const decodeHTML = function (html) {
    const areaElement = document.createElement('textarea')
    areaElement.innerHTML = html
    return areaElement.value
  }

  export const getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }