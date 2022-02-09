import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const LanguageIcon = ({
  IconWidth,
  IconHeight,
  IconColorStart,
  IconColorEnd,
}) => {
  return (
    <Svg
      width={IconWidth}
      height={IconHeight}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18.4895 0.33639C19.1351 0.717974 19.622 1.42987 19.9452 2.51052C20.1181 3.08813 19.8677 3.72434 19.3859 3.93152C18.9042 4.13871 18.3737 3.83843 18.2008 3.26081C17.9933 2.56704 17.7751 2.39172 17.6702 2.32969C17.5168 2.23904 17.3337 2.22234 16.9497 2.22234C16.648 2.22234 16.4693 2.3339 16.3394 2.47301C16.1902 2.63283 16.0607 2.88136 15.9598 3.20584C15.8603 3.52552 15.8065 3.86108 15.7789 4.12757C15.7653 4.25792 15.7588 4.3649 15.7556 4.43613C15.7541 4.4716 15.7533 4.49771 15.753 4.51293L15.7527 4.52705C15.7528 5.12924 15.7625 5.84561 15.9547 6.43642C16.0447 6.71241 16.1628 6.92017 16.3128 7.06906C16.4574 7.2126 16.6806 7.35063 17.0525 7.40043C17.1658 7.41561 17.4101 7.41549 17.6492 7.30854C17.861 7.21384 18.0779 7.03553 18.2283 6.63528C18.4386 6.0758 18.9872 5.8266 19.4538 6.07867C19.9204 6.33075 20.1282 6.98864 19.9179 7.54812C19.1323 9.63905 17.4044 9.6836 16.8467 9.60892C16.1568 9.51653 15.5838 9.23016 15.1311 8.78098C14.684 8.33716 14.4039 7.78389 14.2284 7.24445C13.8988 6.23202 13.8992 5.13266 13.8995 4.56681V4.52179V4.51968L13.8996 4.51451V4.50041L13.9003 4.45761C13.9011 4.42284 13.9024 4.37566 13.905 4.3178C13.9101 4.20243 13.9201 4.04281 13.9397 3.85326C13.9785 3.47994 14.0575 2.9624 14.2234 2.42899C14.388 1.90039 14.6566 1.29582 15.1047 0.815825C15.5721 0.31513 16.1896 0.000123593 16.9497 0.000123593L16.9924 6.42535e-05C17.3302 -0.000617227 17.9171 -0.00181719 18.4895 0.33639ZM4.19143 0.739544C4.06185 0.301664 3.71873 0.00670136 3.33129 0.000123593C2.94384 -0.00646899 2.5939 0.276715 2.45402 0.710003L0.0627352 8.1174C-0.122009 8.68968 0.115108 9.33317 0.592368 9.5547C1.06962 9.77622 1.60627 9.49188 1.79101 8.91962L1.92049 8.51851H4.52693L4.63689 8.89008C4.80803 9.46839 5.33774 9.77086 5.82004 9.56564C6.30233 9.36043 6.55458 8.72526 6.38344 8.14694L4.19143 0.739544ZM3.86933 6.29629H2.63788L3.28038 4.30606L3.86933 6.29629ZM7.41328 1.11111V8.51851C7.41328 9.13215 7.82815 9.62962 8.3399 9.62962C8.39095 9.62962 8.44105 9.62467 8.48985 9.61514V9.62951H10.5018C10.7954 9.62951 11.4077 9.57513 11.9785 9.17728C12.6215 8.72911 13.1186 7.90352 13.1186 6.65389C13.1186 6.0314 13.0052 5.47759 12.7691 5.01281C12.6666 4.81077 12.5476 4.63909 12.4196 4.49379C12.6069 4.08161 12.7177 3.57672 12.7177 2.97598C12.7177 2.37049 12.618 1.83222 12.4093 1.37526C12.1981 0.912403 11.9028 0.594078 11.5934 0.385471C11.0213 -0.000380277 10.4103 -8.39748e-05 10.2025 4.91391e-06H8.34305H8.3399C7.82815 4.91391e-06 7.41328 0.497471 7.41328 1.11111ZM10.5018 7.40729H9.26652V5.92607H10.222L10.2397 5.92599H10.4224C10.6588 5.92599 10.8933 5.94035 11.0619 6.04045C11.1255 6.07826 11.1609 6.11839 11.1863 6.16863C11.213 6.22106 11.2654 6.35688 11.2654 6.65389C11.2654 6.90424 11.2204 7.03187 11.1906 7.09295C11.16 7.15553 11.1159 7.20814 11.0472 7.25604C10.8835 7.37011 10.6507 7.40729 10.5018 7.40729ZM9.41644 3.70378L9.40605 3.70385H9.26652V2.22222H10.1931C10.3871 2.22222 10.5651 2.24151 10.6849 2.32237C10.7261 2.3501 10.7567 2.38307 10.7838 2.44227C10.8134 2.50739 10.8645 2.66197 10.8645 2.97598C10.8645 3.23751 10.8197 3.37118 10.7912 3.43283C10.763 3.49352 10.7261 3.53746 10.6732 3.57591C10.5443 3.66963 10.3578 3.70212 10.2323 3.70378H9.41644ZM14.7571 12.1852C15.0812 11.7102 15.0229 11.0102 14.6268 10.6215C14.2307 10.233 13.6469 10.303 13.3229 10.7779L8.91694 17.2351L6.833 14.7363C6.47114 14.3023 5.88444 14.3023 5.52256 14.7363C5.16069 15.1702 5.16069 15.8736 5.52256 16.3075L8.33051 19.6746C8.51562 19.8966 8.77042 20.0142 9.03189 19.9986C9.29337 19.9829 9.53712 19.8355 9.7029 19.5926L14.7571 12.1852Z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="0"
          y1="10"
          x2="20"
          y2="10"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={IconColorStart} />
          <Stop offset="1" stopColor={IconColorEnd} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export {LanguageIcon};
