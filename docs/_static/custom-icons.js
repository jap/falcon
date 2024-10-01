/*******************************************************************************
 * Set a custom icon for pypi as it's not available in the fa built-in brands
 */
FontAwesome.library.add(
  (faListOldStyle = {
    prefix: "fa-custom",
    iconName: "pypi",
    icon: [
      17.313, // viewBox width
      19.807, // viewBox height
      [], // ligature
      "e001", // unicode codepoint - private use area
      "m10.383 0.2-3.239 1.1769 3.1883 1.1614 3.239-1.1798zm-3.4152 1.2411-3.2362 1.1769 3.1855 1.1614 3.2369-1.1769zm6.7177 0.00281-3.2947 1.2009v3.8254l3.2947-1.1988zm-3.4145 1.2439-3.2926 1.1981v3.8254l0.17548-0.064132 3.1171-1.1347zm-6.6564 0.018325v3.8247l3.244 1.1805v-3.8254zm10.191 0.20931v2.3137l3.1777-1.1558zm3.2947 1.2425-3.2947 1.1988v3.8254l3.2947-1.1988zm-8.7058 0.45739c0.00929-1.931e-4 0.018327-2.977e-4 0.027485 0 0.25633 0.00851 0.4263 0.20713 0.42638 0.49826 1.953e-4 0.38532-0.29327 0.80469-0.65542 0.93662-0.36226 0.13215-0.65608-0.073306-0.65613-0.4588-6.28e-5 -0.38556 0.2938-0.80504 0.65613-0.93662 0.068422-0.024919 0.13655-0.038114 0.20156-0.039466zm5.2913 0.78369-3.2947 1.1988v3.8247l3.2947-1.1981zm-10.132 1.239-3.2362 1.1769 3.1883 1.1614 3.2362-1.1769zm6.7177 0.00213-3.2926 1.2016v3.8247l3.2926-1.2009zm-3.4124 1.2439-3.2947 1.1988v3.8254l3.2947-1.1988zm-6.6585 0.016195v3.8275l3.244 1.1805v-3.8254zm16.9 0.21143-3.2947 1.1988v3.8247l3.2947-1.1981zm-3.4145 1.2411-3.2926 1.2016v3.8247l3.2926-1.2009zm-3.4145 1.2411-3.2926 1.2016v3.8247l3.2926-1.2009zm-3.4124 1.2432-3.2947 1.1988v3.8254l3.2947-1.1988zm-6.6585 0.019027v3.8247l3.244 1.1805v-3.8254zm13.485 1.4497-3.2947 1.1988v3.8247l3.2947-1.1981zm-3.4145 1.2411-3.2926 1.2016v3.8247l3.2926-1.2009zm2.4018 0.38127c0.0093-1.83e-4 0.01833-3.16e-4 0.02749 0 0.25633 0.0085 0.4263 0.20713 0.42638 0.49826 1.97e-4 0.38532-0.29327 0.80469-0.65542 0.93662-0.36188 0.1316-0.65525-0.07375-0.65542-0.4588-1.95e-4 -0.38532 0.29328-0.80469 0.65542-0.93662 0.06842-0.02494 0.13655-0.03819 0.20156-0.03947zm-5.8142 0.86403-3.244 1.1805v1.4201l3.244 1.1805z", // svg path (https://simpleicons.org/icons/pypi.svg)
    ],
  }),
);

/*******************************************************************************
 * Set a custom icon for Falcon as it's not available in the fa built-in brands.
 * NOTE(vytas): But one day we'll be there ("big as Django").
 */
FontAwesome.library.add(
  (faListOldStyle = {
    prefix: "fa-custom",
    iconName: "falcon",
    icon: [
      16.0, // viewBox width
      16.0, // viewBox height
      [], // ligature
      "e002", // unicode codepoint - private use area
      "M 2.54188 0.40205 C 1.38028 1.60365 0.794478 2.81526 0.794478 4.02187 C 0.794478 4.29723 0.814578 4.53255 0.844578 4.54757 C 0.874678 4.56258 0.894678 4.62768 0.894678 4.68775 C 0.894678 4.82794 1.01478 5.1734 1.17508 5.49883 C 1.38528 5.93441 1.69068 6.23982 2.52188 6.84062 C 3.17268 7.31124 3.53318 7.84195 3.65338 8.51284 L 3.71838 8.87332 L 3.89868 8.79822 C 4.35428 8.60296 4.70468 8.53287 5.75108 8.42272 C 6.42198 8.35263 6.68238 8.2525 6.99278 7.94709 C 7.43336 7.5065 7.22308 7.22112 5.84628 6.40504 C 4.36428 5.52386 3.83358 5.11332 3.25778 4.39737 C 2.79718 3.8216 2.56188 3.34597 2.44668 2.75518 C 2.33658 2.20445 2.48678 1.33329 2.82218 0.55225 C 2.91738 0.321944 2.99748 0.121677 2.99748 0.101651 C 2.99748 -0.00348278 2.83228 0.106713 2.54188 0.40205 Z M 15.8896 0.80759 C 15.8646 0.827621 15.7995 0.927752 15.7544 1.02788 C 15.464 1.64871 14.5028 2.23449 12.9857 2.70511 C 12.8506 2.75018 12.6102 2.82026 12.46 2.87033 C 12.3098 2.9154 12.0144 3.01052 11.8092 3.0706 C 9.26079 3.84663 8.8152 4.24717 7.90398 6.55023 C 7.49344 7.5816 7.27815 7.92706 6.85258 8.20744 C 6.49708 8.44776 6.20668 8.52786 5.40068 8.628 C 4.11898 8.7832 3.62328 8.9334 3.22278 9.28887 C 2.97738 9.49915 2.89728 9.71945 2.89728 10.16 C 2.89728 10.3603 2.87728 10.5355 2.85728 10.5506 C 2.83218 10.5656 2.78718 10.7008 2.75208 10.856 C 2.70208 11.0662 2.70208 11.1714 2.74698 11.3066 C 2.81708 11.5118 3.01238 11.6821 3.18758 11.6821 C 3.31278 11.6821 3.31778 11.647 3.22268 11.4217 C 3.20258 11.3666 3.23268 11.2965 3.31778 11.2064 C 3.42798 11.0963 3.48298 11.0813 3.82348 11.0813 C 4.21398 11.0813 4.34418 11.0412 4.52938 10.871 C 4.63458 10.7759 4.63958 10.7759 4.77978 10.9311 C 5.07518 11.2565 5.84618 11.7171 6.80748 12.1477 C 7.26304 12.353 7.54842 12.5983 7.76371 12.9788 C 7.9089 13.2291 7.92893 13.2992 7.92893 13.6597 C 7.92893 14.2455 7.71865 14.646 7.3081 14.8363 C 7.23801 14.8713 7.13787 14.9164 7.09281 14.9414 C 7.04274 14.9664 6.85748 14.9864 6.67728 14.9864 L 6.35188 14.9864 L 6.24668 15.2218 C 6.18658 15.3569 6.11148 15.5222 6.07148 15.5923 C 6.01638 15.7024 6.01638 15.7374 6.07148 15.8176 C 6.13658 15.9027 6.15658 15.8927 6.39688 15.6473 C 6.64718 15.392 6.80238 15.3169 6.80238 15.4571 C 6.80238 15.4971 6.71228 15.5973 6.60718 15.6824 C 6.36188 15.8776 6.32678 16.0178 6.44198 16.3483 C 6.53708 16.6186 6.66228 16.6987 6.69228 16.5135 C 6.70228 16.4584 6.77738 16.3483 6.85748 16.2682 C 6.93758 16.193 7.00268 16.0979 7.00268 16.0629 C 7.00268 16.0278 7.03775 15.9728 7.0778 15.9377 C 7.18794 15.8476 7.233 16.0078 7.16292 16.2581 C 7.11786 16.4284 7.12286 16.4784 7.18794 16.5485 C 7.23801 16.6036 7.25303 16.6787 7.23301 16.7638 C 7.21303 16.8539 7.22304 16.889 7.26811 16.889 C 7.3382 16.889 7.50342 16.7338 7.50342 16.6687 C 7.50342 16.6487 7.54848 16.5636 7.60856 16.4834 C 7.7137 16.3332 7.7187 16.3032 7.62358 15.7725 C 7.60856 15.6724 7.61357 15.5873 7.63359 15.5873 C 7.73873 15.5873 8.09921 15.8176 8.11924 15.8977 C 8.15428 16.0278 8.30448 15.9527 8.30448 15.8025 C 8.30448 15.6123 8.1693 15.402 8.00408 15.3269 C 7.83886 15.2568 7.80882 15.1467 7.944 15.1066 C 8.25946 15.0065 8.55485 14.8262 8.8202 14.5609 C 9.14063 14.2505 9.1957 14.1854 9.40098 13.885 C 9.68636 13.4694 9.95171 13.2842 10.2571 13.2842 C 10.6777 13.2842 11.9994 13.875 13.0208 14.5208 C 13.4964 14.8212 14.4277 15.4721 14.5829 15.6123 C 14.6129 15.6423 14.7831 15.7675 14.9634 15.8977 C 15.1436 16.0228 15.454 16.2632 15.6543 16.4334 C 15.8546 16.5986 16.0348 16.7388 16.0548 16.7388 C 16.22 16.7388 16.2751 16.3082 16.1299 16.178 C 16.0799 16.138 15.9046 16.0278 15.7394 15.9377 C 15.3739 15.7324 14.668 15.2568 14.3626 15.0015 C 13.6717 14.4357 12.7905 13.3293 12.2047 12.2929 C 12.1496 12.2078 12.0645 12.0526 12.0094 11.9524 C 11.5889 11.2164 10.7878 10.2802 10.5725 10.2802 C 10.4874 10.2802 10.4874 10.2752 10.6226 9.62933 C 10.6626 9.42405 10.7227 9.07359 10.7528 8.8533 C 10.8429 8.24248 10.9731 7.54656 11.0682 7.2011 C 11.3385 6.18474 11.9143 5.47881 12.9607 4.88802 C 14.4277 4.05191 15.0134 3.53622 15.434 2.70011 C 15.6593 2.25451 15.7044 2.14437 15.8395 1.6437 C 15.9096 1.38836 15.9947 0.767537 15.9597 0.767537 C 15.9497 0.767537 15.9196 0.787568 15.8896 0.807587 Z M 7.22808 12.6483 C 7.21807 12.6834 7.20305 12.8086 7.18803 12.9387 C 7.158 13.2892 6.92268 13.7548 6.65228 14.0052 C 6.32688 14.3106 6.12658 14.4057 5.95638 14.3406 C 5.88628 14.3156 5.68608 14.2755 5.51578 14.2605 C 5.26548 14.2305 5.17538 14.2455 5.05518 14.3156 C 4.92498 14.3907 4.89998 14.4407 4.89998 14.5959 C 4.89998 14.8162 4.89488 14.8112 5.08018 14.7111 C 5.16038 14.671 5.25548 14.636 5.29048 14.636 C 5.39568 14.636 5.35558 14.7361 5.22538 14.7962 C 5.08028 14.8613 5.04018 14.9864 5.03018 15.377 C 5.02508 15.6724 5.11528 15.7875 5.19538 15.5772 C 5.22038 15.5122 5.31558 15.422 5.40568 15.372 C 5.50078 15.3219 5.63098 15.1917 5.70108 15.0866 C 5.83118 14.8663 5.90128 14.8312 5.90128 14.9814 C 5.90128 15.3019 6.06658 15.3169 6.20668 15.0065 C 6.29188 14.8363 6.33688 14.7912 6.39698 14.8162 C 6.56218 14.8863 6.75748 14.8963 6.82758 14.8363 C 6.89768 14.7762 6.89268 14.7562 6.79748 14.656 C 6.73748 14.5909 6.69238 14.5309 6.70738 14.5208 C 6.81758 14.4407 7.05787 14.3857 7.3032 14.3857 C 7.74378 14.3857 7.80386 14.3106 7.80386 13.7448 C 7.80386 13.169 7.65366 12.7585 7.40833 12.6534 C 7.28317 12.6033 7.24311 12.5983 7.22809 12.6483 Z M 11.2584 13.7248 C 11.2584 13.7498 11.4437 13.865 11.674 13.9801 C 12.7805 14.5659 13.4614 15.2017 13.7167 15.9077 C 13.8319 16.2131 13.8369 16.3232 13.7367 16.5535 C 13.6116 16.8589 13.5915 16.8539 14.4026 16.8289 C 15.1336 16.8039 15.5642 16.7238 15.5642 16.6086 C 15.5642 16.5535 14.9634 15.9878 14.7431 15.8426 C 14.683 15.8025 14.6279 15.7525 14.6129 15.7375 C 14.5979 15.7224 14.4978 15.6423 14.3876 15.5572 C 14.2775 15.4771 14.1573 15.387 14.1273 15.362 C 14.0922 15.3319 14.0121 15.2718 13.952 15.2268 C 13.8869 15.1767 13.7468 15.0666 13.6366 14.9815 C 13.5265 14.8963 13.3562 14.7812 13.2611 14.7311 C 13.0308 14.606 12.8906 14.5158 12.8606 14.4808 C 12.8255 14.4407 12.1346 14.0652 11.8092 13.91 C 11.659 13.8399 11.4938 13.7598 11.4487 13.7348 C 11.3385 13.6747 11.2584 13.6697 11.2584 13.7248 Z",
    ],
  }),
);