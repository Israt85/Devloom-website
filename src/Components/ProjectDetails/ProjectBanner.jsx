import React from 'react';

const ProjectBanner = () => {
  return (
    <div className="w-full my-10 h-[500px]">
      <div className="h-[500px] w-full relative">
        <svg width="0" height="0">
          <defs>
            <clipPath id="Banner-pic" clipPathUnits="userSpaceOnUse">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M0 106C0 47.4578 47.4578 0 106 0H360.639C390.332 0 418.491 13.1891 437.5 36C456.509 58.8109 484.668 72 514.362 72H888.159C916.528 72 943.714 60.6277 963.634 40.4273L972.366 31.5727C992.286 11.3723 1019.47 0 1047.84 0H1345C1403.54 0 1451 47.4578 1451 106V469C1451 527.542 1403.54 575 1345 575H106C47.4578 575 0 527.542 0 469V106Z"
                fill="#D9D9D9"
              />
            </clipPath>
          </defs>
        </svg>
        <img
          style={{ clipPath: 'url(#Banner-pic)', WebkitClipPath: 'url(#Banner-pic)' }}
          className="w-full h-full object-cover"
          src="https://s3-alpha-sig.figma.com/img/4d74/9209/25718668dab894982e1c80ab06cdd784?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PjcgEtmPwlCjpkBgWwxgqcrK0lSAITewCeGJtvH-01xEqq7TJF6JwGsZGeBrECcMTf~PZD5dAr4BapGr3zrQJUen7-j6nfyGudkwSUxjmSSEFJJq23oMqVHKWBna3~YXIfrEv0luFzHRwkCXR5QzyZPfrgxVMCs2Ajo7z~4w6YfxFNr61YNGNOb6U09ziEIKal~v6Q6dk5f5X3~qNnd49fX6HkGY2vaq115hJy9GWosgxV6mbGgtF63gJfWh6ulCSSVFGHG0-qBRMN0B7bRZCHrmLIG7aeBDELKftNQA9rWlbrwps9LrPoAh9j6T2FqdbHcPZuLua40Jm9JtHN04kg__"
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default ProjectBanner;
