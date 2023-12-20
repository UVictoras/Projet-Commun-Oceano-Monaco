export function isSelected(div, css) {
    var selected = document.getElementById(div)
    selected.classList.contains(css)? selected.classList.remove(css): selected.classList.add(css)
}