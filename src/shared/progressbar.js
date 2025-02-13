class ProgressBar {
  constructor({
    container,
    progressContainerSelector, 
    progressSelector, 
    inputSelector, 
    animateSelector, 
    hideSelector 
  }) {
    this.container = document.querySelector(container);

    this.progressContainer = this.container.querySelector(progressContainerSelector);
    this.progressBar = this.container.querySelector(progressSelector);
    this.progressInput = this.container.querySelector(inputSelector);    
    this.animateToggle = this.container.querySelector(animateSelector);
    this.hideToggle = this.container.querySelector(hideSelector);
    this.animationInterval = null;

    this.init();
}

init() {
    this.progressInput.addEventListener("input", (event) => {
        this.progressInput.value = this.progressInput.value.replace(/\D/, "");
        if (this.progressInput.value > 100) {
            this.progressInput.value = this.progressInput.value.replace("");
        }

        this.updateProgress(event.target.value);
    });
    
    this.progressBar.style.strokeDasharray = 2 * Math.PI * this.progressBar.getAttribute("r");
    this.progressBar.style.strokeDashoffset = 2 * Math.PI * this.progressBar.getAttribute("r");
  
    this.updateProgress(this.progressInput.value);

    if (this.animateToggle) {
        this.animateToggle.addEventListener("change", (event) => {
            if (event.target.checked) {
                this.progressBar.classList.add("animated");
            } else {
                this.progressBar.classList.remove("animated");
            }
        });
    }
    
    if (this.hideToggle) {
        this.hideToggle.addEventListener("change", (event) => {
            if (event.target.checked) {
                this.progressContainer.classList.add("hidden");
            } else {
                this.progressContainer.classList.remove("hidden");
            }
        });
    }
}

updateProgress(value) {
    let radius = this.progressBar.getAttribute("r");
    let circumference = 2 * Math.PI * radius;
    let offset = Math.max(0, circumference - (value / 100) * circumference);
    this.progressBar.style.strokeDashoffset = offset;
}
}

export { ProgressBar }