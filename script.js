// Get all input nodes
const codes = document.querySelectorAll('.code');

// Initial focus on first input element
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = '';
            setTimeout(() => {
                // Auto focus next input if exists
                if (codes[idx + 1]) {
                    codes[idx + 1].focus();
                } else {
                    // Blur if no more inputs
                    document.activeElement.blur();
                }
            }, 10);
        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10);
        }
    });
});