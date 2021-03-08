import './index.scss';
import logo from '../../images/rs_school_js.svg';

export default function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'footer text-light bg-primary text-center';
  footer.innerHTML = `
    <div class="container-fluid">
      <div class="row">
      <div class="col-6 footer__text text-left">
      Made by <a class="footer__link" href="https://github.com/IgorOsa" target="_blank">IgorOsa</a> in 2020
      </div>
      <div class="col-6 footer__rs-logo text-right">
        <a href="https://rs.school/js/" target="_blank"><img src="${logo}" width="64" height="64"></a>
      </div>
      </div>
    </div>
`;

  return footer;
}
