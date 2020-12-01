import './index.scss';

export default function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'footer text-light bg-primary text-center';
  footer.innerHTML = `
    <div class="container-fluid">
      &copy; 2020
    </div>
`;

  return footer;
}
