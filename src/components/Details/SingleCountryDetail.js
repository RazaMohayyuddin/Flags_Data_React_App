import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "./detail.scss";
import Header from "../Header/Header";
const SingleCountryDetail = () => {
  return (
    <div className="countryContainer">
      <Header />
      <button className="backBtn">
        <MdOutlineKeyboardBackspace className="icon" />
        Back
      </button>

      <div className="countryDetails">
        <div className="countryFlag">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAA51BMVEX+AAL////7///4AAD+//339PP3FxL8AAD6///0AAD2AADyAADvAAD+AAP+//z3///uZGX47/Dze3n44d/5//vwX13u0MrvUVPvLS7ztrnqn6H69vnugn753tbyy8L0KS33vsDxqKj88+/voJnz59/vcmzpU0/0zcv0TE742trmdHH46Ovth4PrhIrveofuWmPrPTrtbXDxu7XwFxjzlI32RUT3n5nz8Or55eTpNCztUEb3ys3wfoH0s6zmysjrwsTwlprxP0L1t7LppJnqgnnqGx329+vvwrTujJTyPEX0ZGP1rbH1b3By8u5NAAAJR0lEQVR4nO2deVvbuBbGpSOHIzuxnYUQmLKFLTCk90KS0lBgCnTa6dB+/89zJZtsTYjk2nCR0PsHDw+xX0U/jmXtIqQYsZJHX5dgpaCsFSWHSCmHSCmHSCmHSCmHSCmHSCmHSCmHSCmHSCmHSCmHSCmHSCmHSCmHSCmHSCmHSCmHSCmHSCmHSCmHSKmiEEFjrRAfixHR1joUY2QpIi/eQPJHMYwsRUTfVQip1IpwshORR/mmsMJqIWFkJSJKtyooEPnbcQFmdiKCFgpEIe7EkUO0UPEuS82wzR2ihYr6mJphZc8hWgSI72OYmoW4GTtEC1Tz2cgNy43cbzULEcEmjhCJ562ZO4wsRHTgT9lh0MkbRhYiOmThtOFRTjvrEAEclBEndqEMo3xxZBsiEUQ4E0UhHkM+RwsQ8ekogdMKCWcdg8lLTVzp8awxZT6ikz9Pp6rQ0MU5y+rk45jX3nfeHKKoHPynBgCyORZBzZ9DhH7Dk57iGth7X/azVrjNR0SPRQWxvsUj2WKN/4vziPAsqRsBDK/LDL9mtLcAEe8iQ6ycN+Tvm0jmETFWFYUQnF5XEJFl7kQyHxHtpXVpv9prH2O4yDPEu3avXkl+x/2M9jYgGiaIQl9ECAYLEWEgIoml+FjmgRELENG+yjMMQzJ6AP3TN/igQSuLf/ahI/MReTCYrwo9rTpk7au1ABHtZEH05Q0iolBjattHhdjI3Ki1ABGFvnYYoZ+9v98GRPRBH9GHzOZ2ILpguoyw+0YRdfQR3b9RRB8DXUSs8UYRwaWu+8pvDGCbiQjoTFbjQ1331swb34t0KklmIqp9nK3dtHXdB9O3cVoaWouodzmLaE23LOrNDDzyI52eERMRQXxOjrg3gRRHwa99+k+Y1ybmQHmdfNIYHTERkez+wD/5VG7hTC+MfFidumnAUKdrxEhEVz4Jg8F0kX29uLtxViE2x0EDEbQZYezGTkRQl7P0gi9TD8mGHqLB+IaI92R9k2kMZ792RH91IuCyUygalz0RLSez9ILdeFxonzCN1j5j26NcU97xJVWs7E3e+17kJfWJk89GIdr3g7v6TaPE5ShY0kqH+CZtb6C/JnOUaE+nfo3BwYgQNNLOfoa34xmjIgHv4KZ+7PuzDbnXjqgmcSD6H7q900cetZV0/lCIlYMRIjjT8e6PC553K+mTiaS8NUppt9taYSjHkU5MQuTRu/En6Le+d2qnG1Pjrf3x5PO6hjU2R5mOJkTR/6NR69w2y2NX7FOTEFF+O/7qyX848HGqZMazx8viGw1rvBhFUWtCmTE5gCS9x3+65mYhagSjno5xJqaLnWY6sxpOdMqitBj24HCKR/rbFHWGV0ZFEUTxOlv2PsfzJDJgz19y0ejatNhZNHlkohBXVo1CJAqjwfxEhimF2JWMYLWstg4Okktvl9eh2CE1CxGlnaWIxA37suiINRCxPYEI7pfXoBB7xiHiZUUxwzZourhKJRwKRNuKJxL9b8Yhig+XI0JS+RLFPZ3iWlQT78uKajhr/dpqe/2I6Pby3IchYes/VaGWej+sM7Z48shY2P51LvvrRxSt+stLozD5WANRiMnbXVG0fTQviiJovmT6H+Z6R14/Ig/uFe+0AhXixdyI9utHJJrx87Ngny31YH6gzQREWm3UYoRH872QRiDKNIEol7BtJiKvptEAK0bBiZmIaCl4qdSD4VziZiAa6k9Dy5v6tnmIPKDAz1+uLGoC0NXIKETvgG9V8cWiKMDWFReJGoNIRlCjWkHtGVa5JZIqf9oCgxDxWl2jH6ho+YcH0+v6XjeiG58s7ZZ9pq+AwcCYKCp9+j8QCkO8PDUliiLw6i9Wa5z6Ck2PmxJF4pXPB0xv6lBhQvZ3UtcwBJFQvKE9HbYYBW1OZ77Cq0fkxSf9l4ujkJQ/88is0Vipg/UXqzqSryexeR2zQqtHL/Wsne0BNRIRpdeBzjS0XEJkfnVR2oYggnb52Qsk5g8W7nVkCCKPdirPHEfM74FncBQJDXfwGXvWGPZPFqdrDqKIllr4TIEkmhx4V6NP/G+MQSQUbz5Tr0jI2PnTC2ZMQsT5j2fqGmH7SxYVm4RIPAlrz1BoI6lsL1sKYhgivndX+LMmuz6sQSTX2IEokIqLpEDUGH+Wli/cMwtRItkVWVRqAfoXqr0xzUME0FgXcVRAIKFA3V9T7h5qHiI50/iwmCYbY02NjdVMRESB72pN3FMpuNHZQMRIRKKK9K2ee9IRa87N2bMJEXC+n7Pj3+/GepvQGIpIvP5pO8/8PmTfOdXb18BUREI80wZhv+oy1t0I22BE9J88UfRlvgfWQkRbOWqQuKubismIoJ3nnfb9LSDi/+Z50FYeVyNbjWhYyVHDDoMr3V3VjEUE8f78mIhouaFc55quEk3Xu8o/zLfoGLmeG1O0DRHlHxbdjgTLwc7Oip9sCOHv7DCfkYUVqL4mIXMRQUOOh4QCCSY/krHCr0eb7autSG7m0Ceksiv3cB5etbtHX4PHJdTyumRJEWG6p1+Yi0i+z5J16cgCf7153b5q1CZNirhNyOa4tIH4nSD1vnkZBMkdyYIr3c35jEVE5W4ErLL+0G1vD0sRcOCeR6PH1dEe/CBkMELkReIjEVAQl4adH+9/rpdlBPY191UzFtFp9Xbjr4+rT36+L6Lo6Sep1rm/rWruzmcsovRwi6dOrAC4kJsSP5Xp1UjUirhmQuYiAm9ZSx26hBwuKY8jGunux2suIkW+Ngl5KMLIWkTA64S0CjCi1iKi8EDIcRFG9iKiTULuCjGyFpHskuyrL9ORpYgA7hwiRbbojtzo0h3QvEyiGesX42QpIqAVQoJSAU72IvJEQzVwh8Uv06ovHjSHaFm2Sv7MIY25vCxFJHfoY0/NpM7oZSmioSiLMPfBw6mXnYhog0lERThZiyjZLVR/UHqZbEWU7OezUYSTtYg+S0QLNiP6DdmKqCe9LopwshbRDxlFmc8/XShbEe0TedJX9vPiFshSRHKMaMkoUTYvSxF1pdfPApzsRXQtvYoZJbIUEZWnqZCm+joNWYoIqnL6x2+cXbnIy05EdPOo1To6d8W1OneFmFiNqBA5REo5REo5REo5REo5REo5REo5REo5REo5REo5REo5REo5REo5REo5REo5REo5REo5REo5REo5REoVhuh/HSe3wg8PcI4AAAAASUVORK5CYII="
            alt="country"
            className="countryFlagImage"
          />
        </div>
        <div className="countryInfo">
          <h2>Canada</h2>
          <div className="countryInfoDetails">
            <div className="countryInfoLeft">
              <p>
                <span>Native Name:</span> Native Name
              </p>
              <p>
                <span>Population:</span> Country Population
              </p>
              <p>
                <span>Region:</span> Country Region
              </p>
              <p>
                <span>Sub Region:</span> Country Sub Region
              </p>
              <p>
                <span>Capital:</span> Country Capital
              </p>
            </div>
            <div className="countryInfoRight">
              <p>
                <span>Top Level Domain:</span> Country Domain
              </p>
              <p>
                <span>Currencies:</span> Country Currencies
              </p>
              <p>
                <span>Languages:</span> Country Languages
              </p>
            </div>
          </div>
          <div className="countryBorder">
            <p>
              <span>Border Countries:</span>
              <span className="borderCountry">Country Border</span>
              <span className="borderCountry">Country Border</span>
              <span className="borderCountry">Country Border</span>
              <span className="borderCountry">Country Border</span>
              <span className="borderCountry">Country Border</span>
              <span className="borderCountry">Country Border</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountryDetail;
