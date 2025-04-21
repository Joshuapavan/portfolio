export const scrollToSection = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 80; // Adjust for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
