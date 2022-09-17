import React, { useEffect, useState } from 'react';

export const Stagger: React.FC = () => {
  const [useHoverStagger, setUseHoverStagger] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setUseHoverStagger(true);
    }, 3000);
  }, []);

  return (
    <div className="max-h-[650px] group h-max max-w-[1200px] w-full p-2 overflow-hidden">
      <svg
        className=""
        viewBox="0 0 7590 3750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="" id="S-Stagger">
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-33"
          >
            <rect
              id="Rectangle 349"
              x="1090"
              y="3700"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 341"
              x="1970"
              y="3700"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 364"
              x="2350"
              y="3700"
              width="200"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 357"
              x="2630"
              y="3700"
              width="700"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 452"
              x="3410"
              y="3700"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 451"
              x="4290"
              y="3700"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 419"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5370 3700)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 434"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5650 3700)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 380"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6030 3700)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 446"
              width="100"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6210 3700)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 390"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6590 3700)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-32"
          >
            <rect
              id="Rectangle 351"
              width="900"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 1997 3584)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 343"
              width="800"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2077 3634)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 455"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3157 3584)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 453"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3537 3584)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 456"
              width="100"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3717 3584)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 454"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4097 3584)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 417"
              x="4177"
              y="3584"
              width="900"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 450"
              x="5157"
              y="3584"
              width="500"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 408"
              x="5737"
              y="3584"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 468"
              x="6817"
              y="3634"
              width="200"
              height="50"
              rx="25"
              transform="rotate(-180 6817 3634)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 467"
              x="7197"
              y="3634"
              width="300"
              height="50"
              rx="25"
              transform="rotate(-180 7197 3634)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-31"
          >
            <rect
              id="Rectangle 465"
              y="3468"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 466"
              x="880"
              y="3468"
              width="200"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 353"
              x="1160"
              y="3468"
              width="700"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 345"
              x="1940"
              y="3468"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 337"
              x="2820"
              y="3468"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 360"
              x="3200"
              y="3468"
              width="200"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 143"
              width="500"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 3480 3518)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 469"
              x="4360"
              y="3518"
              width="300"
              height="50"
              rx="25"
              transform="rotate(-180 4360 3518)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 423"
              x="5140"
              y="3518"
              width="700"
              height="50"
              rx="25"
              transform="rotate(180 5140 3518)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 440"
              x="5420"
              y="3518"
              width="200"
              height="50"
              rx="25"
              transform="rotate(180 5420 3518)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 385"
              x="5800"
              y="3518"
              width="300"
              height="50"
              rx="25"
              transform="rotate(180 5800 3518)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 399"
              x="6680"
              y="3518"
              width="800"
              height="50"
              rx="25"
              transform="rotate(180 6680 3518)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-30"
          >
            <rect
              id="Rectangle 352"
              x="1684"
              y="3402"
              width="700"
              height="50"
              rx="25"
              transform="rotate(180 1684 3402)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 358"
              x="1964"
              y="3402"
              width="200"
              height="50"
              rx="25"
              transform="rotate(180 1964 3402)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 335"
              x="2344"
              y="3402"
              width="300"
              height="50"
              rx="25"
              transform="rotate(180 2344 3402)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 342"
              x="3224"
              y="3402"
              width="800"
              height="50"
              rx="25"
              transform="rotate(180 3224 3402)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 142"
              width="400"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 3304 3402)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 141"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 3784 3402)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 457"
              x="4664"
              y="3402"
              width="500"
              height="50"
              rx="25"
              transform="rotate(-180 4664 3402)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 442"
              x="4744"
              y="3352"
              width="200"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 447"
              x="5524"
              y="3402"
              width="500"
              height="50"
              rx="25"
              transform="rotate(180 5524 3402)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 412"
              x="6504"
              y="3402"
              width="900"
              height="50"
              rx="25"
              transform="rotate(180 6504 3402)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-29"
          >
            <rect
              id="Rectangle 354"
              width="700"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 683 3286)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 346"
              width="800"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 1463 3286)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 338"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2343 3286)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 361"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2723 3286)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 140"
              x="3003"
              y="3236"
              width="400"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 121"
              x="3483"
              y="3236"
              width="400"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 120"
              x="3963"
              y="3236"
              width="300"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 410"
              width="800"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 4343 3286)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 392"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 5223 3286)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 443"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 5603 3286)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 429"
              width="700"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 5883 3286)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-28"
          >
            <rect
              id="Rectangle 348"
              x="551"
              y="3120"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 340"
              x="1431"
              y="3120"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 363"
              x="1811"
              y="3120"
              width="200"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 356"
              x="2091"
              y="3120"
              width="700"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 139"
              x="2871"
              y="3120"
              width="300"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 118"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3951 3120)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 119"
              x="4031"
              y="3120"
              width="400"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 427"
              x="4511"
              y="3120"
              width="700"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 405"
              x="5291"
              y="3120"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 388"
              x="6171"
              y="3120"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-27"
          >
            <rect
              id="Rectangle 350"
              width="900"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 1836 3004)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 367"
              x="1916"
              y="3004"
              width="100"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 365"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2096 3054)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 366"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2476 3054)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 138"
              x="2756"
              y="3004"
              width="400"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 117"
              x="3236"
              y="3004"
              width="200"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 116"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3716 3004)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 112"
              width="400"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 3796 3054)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 109"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 4276 3054)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 421"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5356 3004)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 437"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5636 3004)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 382"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6016 3004)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 396"
              width="800"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6896 3004)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-26"
          >
            <rect
              id="Rectangle 344"
              x="992"
              y="2888"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 336"
              x="1872"
              y="2888"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 359"
              x="2252"
              y="2888"
              width="200"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 137"
              width="400"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2532 2938)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 115"
              x="3012"
              y="2888"
              width="200"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 110"
              width="600"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 3292 2938)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 111"
              width="100"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 3972 2938)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 114"
              width="500"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 4152 2938)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 424"
              x="4732"
              y="2888"
              width="700"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 402"
              x="5512"
              y="2888"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-25"
          >
            <rect
              id="Rectangle 275"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 1000 2816)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 288"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 1380 2816)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 285"
              width="700"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 1660 2816)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 130"
              width="400"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2440 2816)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 95"
              x="2920"
              y="2766"
              width="400"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 106"
              x="3400"
              y="2766"
              width="600"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 107"
              x="4080"
              y="2766"
              width="100"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 108"
              x="4260"
              y="2766"
              width="500"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 418"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5540 2766)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 433"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5820 2766)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-24"
          >
            <rect
              id="Rectangle 282"
              x="1506"
              y="2705"
              width="800"
              height="50"
              rx="25"
              transform="rotate(-180 1506 2705)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 286"
              x="2286"
              y="2705"
              width="700"
              height="50"
              rx="25"
              transform="rotate(-180 2286 2705)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 133"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 2566 2655)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 136"
              width="400"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3046 2655)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 236"
              x="3126"
              y="2655"
              width="700"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 92"
              x="3906"
              y="2655"
              width="200"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 94"
              x="4186"
              y="2655"
              width="400"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 91"
              x="4666"
              y="2655"
              width="200"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 460"
              width="100"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5046 2655)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 416"
              x="5126"
              y="2655"
              width="900"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 449"
              x="6106"
              y="2655"
              width="500"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-23"
          >
            <rect
              id="Rectangle 280"
              width="800"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 764 2589)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 276"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 1644 2589)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 289"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2024 2589)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 132"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 2504 2539)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 135"
              width="400"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 2984 2539)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 234"
              x="3764"
              y="2589"
              width="700"
              height="50"
              rx="25"
              transform="rotate(180 3764 2589)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 241"
              x="4044"
              y="2589"
              width="200"
              height="50"
              rx="25"
              transform="rotate(180 4044 2589)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 187"
              x="4124"
              y="2539"
              width="100"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 93"
              x="4304"
              y="2539"
              width="400"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 90"
              x="4784"
              y="2539"
              width="200"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 474"
              x="5064"
              y="2539"
              width="500"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 294"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 5644 2589)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 326"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 6024 2589)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 318"
              width="700"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 6304 2589)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-22"
          >
            <rect
              id="Rectangle 278"
              x="1417"
              y="2478"
              width="300"
              height="50"
              rx="25"
              transform="rotate(-180 1417 2478)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 283"
              x="2297"
              y="2478"
              width="800"
              height="50"
              rx="25"
              transform="rotate(-180 2297 2478)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 235"
              x="3077"
              y="2478"
              width="700"
              height="50"
              rx="25"
              transform="rotate(180 3077 2478)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 242"
              x="3357"
              y="2478"
              width="200"
              height="50"
              rx="25"
              transform="rotate(180 3357 2478)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 226"
              x="4237"
              y="2478"
              width="800"
              height="50"
              rx="25"
              transform="rotate(180 4237 2478)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 105"
              width="100"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4417 2428)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 100"
              width="600"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5097 2428)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 309"
              x="5977"
              y="2478"
              width="800"
              height="50"
              rx="25"
              transform="rotate(-180 5977 2478)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 321"
              x="6757"
              y="2478"
              width="700"
              height="50"
              rx="25"
              transform="rotate(-180 6757 2478)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-21"
          >
            <rect
              id="Rectangle 287"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 1348 2318)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 290"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 1628 2318)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 279"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 2008 2318)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 238"
              width="700"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2088 2368)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 230"
              width="800"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2868 2368)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 222"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 3748 2368)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 245"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 4128 2368)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 128"
              width="100"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4508 2318)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 127"
              width="600"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5188 2318)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 305"
              width="800"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 5268 2368)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 296"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 6148 2368)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 329"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 6528 2368)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-20"
          >
            <rect
              id="Rectangle 284"
              x="776"
              y="2195"
              width="900"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 292"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 2056 2195)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 231"
              x="2136"
              y="2195"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 224"
              x="3016"
              y="2195"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 247"
              x="3396"
              y="2195"
              width="200"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 240"
              x="3676"
              y="2195"
              width="700"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 126"
              width="100"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4556 2195)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 124"
              width="600"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5236 2195)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 300"
              x="5616"
              y="2245"
              width="300"
              height="50"
              rx="25"
              transform="rotate(-180 5616 2245)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 311"
              x="6496"
              y="2245"
              width="800"
              height="50"
              rx="25"
              transform="rotate(-180 6496 2245)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-19"
          >
            <rect
              id="Rectangle 281"
              x="570"
              y="2084"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 277"
              x="1450"
              y="2084"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 291"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 1830 2134)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 233"
              width="900"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3010 2084)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 227"
              width="800"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 3090 2134)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 473"
              width="400"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 3970 2134)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 125"
              width="100"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4550 2084)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 123"
              width="600"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5230 2084)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 324"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6010 2084)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 332"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6290 2084)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 302"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6670 2084)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 322"
              width="700"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 6750 2134)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-18"
          >
            <rect
              id="Rectangle 254"
              width="800"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 1416 2018)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 250"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2296 2018)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 268"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2676 2018)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 262"
              width="700"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2956 2018)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 379"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3936 1968)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 378"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4316 1968)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 103"
              width="100"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4496 1968)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 98"
              width="600"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5176 1968)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 315"
              x="5256"
              y="1968"
              width="900"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 303"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6536 1968)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 312"
              x="6616"
              y="1968"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-17"
          >
            <rect
              id="Rectangle 258"
              width="900"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 1176 1904)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 271"
              width="500"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2156 1904)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 269"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 2936 1854)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 462"
              x="3916"
              y="1904"
              width="900"
              height="50"
              rx="25"
              transform="rotate(-180 3916 1904)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 463"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 3996 1904)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 102"
              width="100"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4376 1854)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 97"
              width="600"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5056 1854)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 307"
              x="5136"
              y="1854"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 298"
              x="6016"
              y="1854"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 327"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 6396 1904)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 313"
              width="900"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 7576 1854)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-16"
          >
            <rect
              id="Rectangle 265"
              x="1695"
              y="1790"
              width="700"
              height="50"
              rx="25"
              transform="rotate(-180 1695 1790)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 270"
              x="1975"
              y="1790"
              width="200"
              height="50"
              rx="25"
              transform="rotate(-180 1975 1790)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 252"
              x="2355"
              y="1790"
              width="300"
              height="50"
              rx="25"
              transform="rotate(-180 2355 1790)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 257"
              x="3235"
              y="1790"
              width="800"
              height="50"
              rx="25"
              transform="rotate(-180 3235 1790)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 461"
              x="3315"
              y="1740"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 101"
              width="100"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4295 1740)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 96"
              width="600"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4975 1740)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 306"
              width="800"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 5055 1790)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 297"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 5935 1790)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 330"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 6315 1790)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-15"
          >
            <rect
              id="Rectangle 251"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 1353 1624)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 256"
              width="800"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 2233 1624)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 264"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3013 1624)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 79"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3793 1624)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 78"
              width="500"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4373 1624)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 81"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4653 1624)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 80"
              width="100"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4833 1624)"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 459"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 4913 1674)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 314"
              width="900"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 5193 1674)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 333"
              width="500"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 6173 1674)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-14"
          >
            <rect
              id="Rectangle 253"
              x="643"
              y="1508"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 249"
              x="1523"
              y="1508"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 267"
              x="1903"
              y="1508"
              width="200"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 261"
              x="2183"
              y="1508"
              width="700"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 88"
              x="2963"
              y="1508"
              width="100"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 87"
              x="3143"
              y="1508"
              width="200"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 89"
              x="3423"
              y="1508"
              width="500"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 86"
              x="4003"
              y="1508"
              width="700"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 471"
              x="4783"
              y="1508"
              width="900"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 323"
              x="6463"
              y="1558"
              width="700"
              height="50"
              rx="25"
              transform="rotate(-180 6463 1558)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 331"
              x="6743"
              y="1558"
              width="200"
              height="50"
              rx="25"
              transform="rotate(-180 6743 1558)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 301"
              x="7123"
              y="1558"
              width="300"
              height="50"
              rx="25"
              transform="rotate(-180 7123 1558)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-13"
          >
            <rect
              id="Rectangle 255"
              width="800"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 1616 1390)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 263"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 2396 1390)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 273"
              x="2676"
              y="1440"
              width="200"
              height="50"
              rx="25"
              transform="rotate(-180 2676 1440)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 76"
              x="2756"
              y="1390"
              width="200"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 77"
              x="3036"
              y="1390"
              width="400"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 75"
              x="3516"
              y="1390"
              width="700"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 458"
              width="900"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 4296 1440)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 472"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5576 1390)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 299"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5956 1390)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 310"
              width="800"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6836 1390)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-12"
          >
            <rect
              id="Rectangle 248"
              x="830"
              y="1274"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 266"
              x="1210"
              y="1274"
              width="200"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 260"
              x="1490"
              y="1274"
              width="700"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 274"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 2270 1324)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 68"
              x="2650"
              y="1274"
              width="600"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 69"
              x="3330"
              y="1274"
              width="100"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 70"
              x="3510"
              y="1274"
              width="500"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 470"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 4090 1324)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 371"
              x="5270"
              y="1324"
              width="900"
              height="50"
              rx="25"
              transform="rotate(180 5270 1324)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 304"
              x="5350"
              y="1274"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 295"
              x="6230"
              y="1274"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 328"
              x="6610"
              y="1274"
              width="200"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 319"
              x="6890"
              y="1274"
              width="700"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-11"
          >
            <rect
              id="Rectangle 272"
              width="500"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 1439 1160)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 259"
              width="900"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 2419 1160)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 65"
              x="2499"
              y="1160"
              width="300"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 66"
              x="2879"
              y="1160"
              width="200"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 67"
              x="3159"
              y="1160"
              width="400"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 377"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3839 1160)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 369"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 3919 1210)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 373"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 4299 1210)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 372"
              width="700"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 4579 1210)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 308"
              width="800"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6159 1160)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 320"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6939 1160)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-10"
          >
            <rect
              id="Rectangle 204"
              width="800"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 508 1094)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 213"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 1388 1094)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 209"
              width="700"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 1668 1094)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 71"
              x="2448"
              y="1044"
              width="600"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 72"
              x="3128"
              y="1044"
              width="100"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 374"
              x="3808"
              y="1094"
              width="500"
              height="50"
              rx="25"
              transform="rotate(180 3808 1094)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 375"
              x="3888"
              y="1044"
              width="100"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 370"
              x="4068"
              y="1044"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 368"
              x="4948"
              y="1044"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 376"
              x="5328"
              y="1044"
              width="100"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 293"
              x="5508"
              y="1044"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 325"
              x="5888"
              y="1044"
              width="200"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 317"
              x="6168"
              y="1044"
              width="700"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-9"
          >
            <rect
              id="Rectangle 215"
              x="257"
              y="978"
              width="200"
              height="50"
              rx="25"
              transform="rotate(-180 257 978)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 202"
              x="637"
              y="978"
              width="300"
              height="50"
              rx="25"
              transform="rotate(-180 637 978)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 206"
              x="1517"
              y="978"
              width="800"
              height="50"
              rx="25"
              transform="rotate(-180 1517 978)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 211"
              x="2297"
              y="978"
              width="700"
              height="50"
              rx="25"
              transform="rotate(-180 2297 978)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 73"
              x="2377"
              y="928"
              width="600"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 74"
              x="3057"
              y="928"
              width="100"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 149"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3937 928)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 150"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4217 928)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 147"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4597 928)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 148"
              width="800"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5477 928)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 334"
              width="500"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6057 928)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 316"
              width="900"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 7037 928)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-8"
          >
            <rect
              id="Rectangle 212"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 730 812)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 216"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 1010 812)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 203"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 1390 812)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 207"
              width="800"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 2270 812)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 61"
              x="2350"
              y="812"
              width="600"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 63"
              x="3030"
              y="812"
              width="100"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 145"
              x="3210"
              y="812"
              width="200"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 45"
              x="3490"
              y="812"
              width="100"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 146"
              x="3670"
              y="812"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 64"
              x="4050"
              y="812"
              width="400"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 62"
              x="4530"
              y="812"
              width="200"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 197"
              width="800"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 4810 862)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 196"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 5690 862)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 199"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 6070 862)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 198"
              width="700"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 6350 862)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-7"
          >
            <rect
              id="Rectangle 218"
              x="1347"
              y="746"
              width="800"
              height="50"
              rx="25"
              transform="rotate(180 1347 746)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 208"
              x="1427"
              y="696"
              width="900"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 57"
              x="2407"
              y="696"
              width="600"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 59"
              x="3087"
              y="696"
              width="100"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 47"
              x="3267"
              y="696"
              width="400"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 144"
              x="3747"
              y="696"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 60"
              x="4127"
              y="696"
              width="400"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 58"
              x="4607"
              y="696"
              width="200"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 190"
              width="900"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 4887 746)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 193"
              width="500"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 5867 746)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 195"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6647 696)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-6"
          >
            <rect
              id="Rectangle 214"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 402 580)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 201"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 782 580)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 205"
              width="800"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 1662 580)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 210"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 2442 580)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 55"
              x="2522"
              y="580"
              width="600"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 56"
              x="3202"
              y="580"
              width="100"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 31"
              x="3382"
              y="580"
              width="600"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 53"
              x="4062"
              y="580"
              width="400"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 54"
              x="4542"
              y="580"
              width="200"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 191"
              x="5522"
              y="630"
              width="700"
              height="50"
              rx="25"
              transform="rotate(-180 5522 630)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 192"
              x="5802"
              y="630"
              width="200"
              height="50"
              rx="25"
              transform="rotate(-180 5802 630)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 188"
              x="6182"
              y="630"
              width="300"
              height="50"
              rx="25"
              transform="rotate(-180 6182 630)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 189"
              x="7062"
              y="630"
              width="800"
              height="50"
              rx="25"
              transform="rotate(-180 7062 630)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-5"
          >
            <rect
              id="Rectangle 181"
              width="800"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 369 514)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 179"
              width="300"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 1249 514)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 185"
              width="200"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 1629 514)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 183"
              width="700"
              height="50"
              rx="25"
              transform="matrix(1 0 0 -1 1909 514)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 52"
              x="2689"
              y="464"
              width="300"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 42"
              x="3069"
              y="464"
              width="200"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 51"
              x="3349"
              y="464"
              width="400"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 40"
              x="3829"
              y="464"
              width="700"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 177"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4809 464)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 171"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5189 464)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 173"
              width="800"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6069 464)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 175"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6849 464)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-4"
          >
            <rect
              id="Rectangle 186"
              x="705"
              y="398"
              width="200"
              height="50"
              rx="25"
              transform="rotate(180 705 398)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 180"
              x="1085"
              y="398"
              width="300"
              height="50"
              rx="25"
              transform="rotate(180 1085 398)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 182"
              x="1965"
              y="398"
              width="800"
              height="50"
              rx="25"
              transform="rotate(180 1965 398)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 184"
              x="2745"
              y="398"
              width="700"
              height="50"
              rx="25"
              transform="rotate(180 2745 398)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 30"
              x="2825"
              y="348"
              width="600"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 44"
              x="3505"
              y="348"
              width="100"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 50"
              x="3685"
              y="348"
              width="500"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 178"
              x="4265"
              y="348"
              width="100"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 172"
              x="4445"
              y="348"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 170"
              x="5325"
              y="348"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 176"
              x="5705"
              y="348"
              width="200"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 174"
              x="5985"
              y="348"
              width="700"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-3"
          >
            <rect
              id="Rectangle 168"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 1482 232)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 169"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 1762 232)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 166"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 2142 232)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 167"
              width="800"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3022 232)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 46"
              x="3102"
              y="232"
              width="400"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 28"
              x="3582"
              y="232"
              width="300"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 165"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4162 232)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 162"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4542 232)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 163"
              width="800"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5422 232)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 164"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6202 232)"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-2"
          >
            <rect
              id="Rectangle 35"
              x="1646"
              y="116"
              width="900"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 151"
              x="2626"
              y="116"
              width="500"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 48"
              x="3206"
              y="116"
              width="500"
              height="50"
              rx="25"
              fill="#6C63FF"
            />
            <rect
              id="Rectangle 33"
              x="3786"
              y="116"
              width="800"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 29"
              x="4666"
              y="116"
              width="300"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 43"
              x="5046"
              y="116"
              width="200"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 41"
              x="5326"
              y="116"
              width="700"
              height="50"
              rx="25"
              fill="#9D9D9D"
            />
          </g>
          <g
            className={useHoverStagger ? 'stagger-onhover' : 'stagger-onload'}
            id="row-1"
          >
            <rect
              id="Rectangle 161"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 1084 0)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 159"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 1464 0)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 160"
              width="800"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 2344 0)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 155"
              width="700"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3124 0)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 156"
              width="200"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3404 0)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 152"
              width="300"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 3784 0)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 153"
              width="800"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 4664 0)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 158"
              width="500"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 5244 0)"
              fill="#9D9D9D"
            />
            <rect
              id="Rectangle 154"
              width="900"
              height="50"
              rx="25"
              transform="matrix(-1 0 0 1 6224 0)"
              fill="#9D9D9D"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Stagger;
