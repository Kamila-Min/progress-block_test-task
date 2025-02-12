import "./styles/index.less"
import { ProgressBar } from './shared/progressbar';

document.addEventListener("DOMContentLoaded", () => {
    const progressbar = new ProgressBar({
        container: ".progress-bar-index",
        progressContainerSelector: ".progress-bar-index__progress-container",
        progressSelector: ".progress-ring__fill",
        inputSelector: ".value",
        animateSelector: ".animate",
        hideSelector: ".hide",
    });

    console.log (progressbar);
});