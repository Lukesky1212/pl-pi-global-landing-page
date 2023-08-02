import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BasicBrandCircle11Icon } from './BasicBrandCircle11Icon.js';
import { BasicBrandCircle14Icon } from './BasicBrandCircle14Icon.js';
import { BasicBrandCircle15Icon } from './BasicBrandCircle15Icon.js';
import { BasicLogoPPRO } from './BasicLogoPPRO/BasicLogoPPRO';
import classes from './DesktopView.module.css';
import { DevHubLogoIcon } from './DevHubLogoIcon.js';
import { Frame1561Icon } from './Frame1561Icon.js';
import { Frame1562Icon } from './Frame1562Icon.js';
import { Frame1563Icon } from './Frame1563Icon.js';
import { HtmlIcon } from './HtmlIcon.js';
import { IcoIcon } from './IcoIcon.js';
import { IcoInstaIcon } from './IcoInstaIcon.js';
import { IcoLinkedinIcon } from './IcoLinkedinIcon.js';
import { IconWrapper_UnionTrueSize16px } from './IconWrapper_UnionTrueSize16px/IconWrapper_UnionTrueSize16px';
import { IconWrapper_UnionTrueSize24px } from './IconWrapper_UnionTrueSize24px/IconWrapper_UnionTrueSize24px';
import { IcoTwitterIcon } from './IcoTwitterIcon.js';
import { IcoYtIcon } from './IcoYtIcon.js';
import { InputDefault_SizeXLargeStateDe } from './InputDefault_SizeXLargeStateDe/InputDefault_SizeXLargeStateDe';
import { LeftVisualIcon2 } from './LeftVisualIcon2.js';
import { LeftVisualIcon } from './LeftVisualIcon.js';
import { NavFooterItem_TypeDefaultScree } from './NavFooterItem_TypeDefaultScree/NavFooterItem_TypeDefaultScree';
import { SOME24xInstaDefault } from './SOME24xInstaDefault/SOME24xInstaDefault';
import { SOME24xLinkedInDefault } from './SOME24xLinkedInDefault/SOME24xLinkedInDefault';
import { SOME24xTwitterDefault } from './SOME24xTwitterDefault/SOME24xTwitterDefault';
import { SOME24xYouTubeDefault } from './SOME24xYouTubeDefault/SOME24xYouTubeDefault';
import { WrapperIcon2 } from './WrapperIcon2.js';
import { WrapperIcon3 } from './WrapperIcon3.js';
import { WrapperIcon4 } from './WrapperIcon4.js';
import { WrapperIcon5 } from './WrapperIcon5.js';
import { WrapperIcon6 } from './WrapperIcon6.js';
import { WrapperIcon7 } from './WrapperIcon7.js';
import { WrapperIcon } from './WrapperIcon.js';

const url = 'https://developerhub.ppro.com/';

interface Props {
  className?: string;
  hide?: {
    icoBefore?: boolean;
    active?: boolean;
    icoAfter?: boolean;
    error?: boolean;
  };
}
/* @figmaId 701:24773 */
export const DesktopView: FC<Props> = memo(function DesktopView(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.homeWrapper}>
        <div className={classes.navBar}>
          <div className={classes.frame1527}>
            <div className={classes.container}>
              <div className={classes.logo}>
                <div className={classes.devHubLogo}>
                  <DevHubLogoIcon className={classes.icon13} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.heroSection}>
          <div className={classes.frame1461}>
            <div className={classes.frame1557}>
              <div className={classes.frame1555}>
                <div className={classes.introducingThe}>Introducing the</div>
                <div className={classes.pPROGlobalAPI}>PPRO Global API</div>
              </div>
            </div>
            <div className={classes.frame1556}>
              <div className={classes.experienceThePowerOfOurPayment}>
                Experience the power of our payments platform through one integration with our robust, secure and
                developer-friendly RESTful API.
              </div>
              <div className={classes.frame1524}>
                <div className={classes.fastAndSimpleToIntegrateWithCo}>
                  <div className={classes.textBlock3}>
                    Fast and simple to integrate, with comprehensive documentation{' '}
                  </div>
                  <div className={classes.textBlock4}>
                    and hands-on support, you can get it up and running in no time.
                  </div>
                </div>
              </div>
              <div className={classes.frame1514}>
                <button className={classes.button} onClick={() => window?.open(url, '_blank')?.focus()}>
                  <div className={classes.getStarted}>Get started</div>
                  <IconWrapper_UnionTrueSize24px
                    className={classes.iconWrapper}
                    swap={{
                      wrapper: <WrapperIcon className={classes.icon} />,
                    }}
                  />
                </button>
                <button className={classes.button2} onClick={() => window?.open(url, '_blank')?.focus()}>
                  <div className={classes.aPIReference}>API Reference</div>
                </button>
              </div>
              <div className={classes.frame1516}>
                <div className={classes.frame1517}>
                  <div className={classes.basicBrandCircle14}>
                    <BasicBrandCircle14Icon className={classes.icon14} />
                  </div>
                  <div className={classes.basicBrandCircle15}>
                    <BasicBrandCircle15Icon className={classes.icon15} />
                  </div>
                  <div className={classes.basicScrollindicator}>
                    <div className={classes.basicBrandCircle11}>
                      <BasicBrandCircle11Icon className={classes.icon16} />
                    </div>
                  </div>
                </div>
                <IconWrapper_UnionTrueSize16px
                  className={classes.iconWrapper2}
                  swap={{
                    wrapper: <WrapperIcon2 className={classes.icon2} />,
                  }}
                />
                <div className={classes.scrollToDiscoverMoreSolutions}>Scroll to discover more solutions</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame1551}>
          <div className={classes.content2}>
            <div className={classes.hTML}>
              <HtmlIcon className={classes.icon17} />
            </div>
            <div className={classes.heading}>
              <div className={classes.allAPIs}>All APIs</div>
            </div>
            <div className={classes.paragraph}>
              <div className={classes.exploreOurOtherAPIsAndFindTheP}>
                Explore our other APIs and find the product that’s right for you.
              </div>
            </div>
          </div>
          <div className={classes.frame1550}>
            <div className={classes.frame1552}>
              <div className={classes.cardContainer}>
                <div className={classes.cardHover}>
                  <div className={classes.frame1498}>
                    <div className={classes.frame1549}>
                      <div className={classes.fraudAlertsAPI}>Fraud Alerts API</div>
                      <div className={classes.beOneStepAheadAndGetAdvancedNo}>
                        Be one step ahead and get advanced notification of a chargeback. Take preventative action to
                        avoid unnecessary costs and reputational damage.
                      </div>
                    </div>
                    <div className={classes.buttonsContainer}>
                      <div className={classes.ppro_icons_trust1}></div>
                      <div className={classes.secondaryButton}>
                        <div className={classes.textItem}>Contact us to get access</div>
                        <IconWrapper_UnionTrueSize24px
                          className={classes.iconWrapper3}
                          swap={{
                            wrapper: <WrapperIcon3 className={classes.icon3} />,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.cardContainer2}>
                <div className={classes.cardHover2}>
                  <div className={classes.frame14982}>
                    <div className={classes.frame15492}>
                      <div className={classes.chargebackDisputesAPI}>Chargeback Disputes API</div>
                      <div className={classes.takeChargeAndAutomateYourDispu}>
                        Take charge and automate your dispute management process. Maximize protection against fraudulent
                        claims and prevent losses.
                      </div>
                    </div>
                    <div className={classes.buttonsContainer2}>
                      <div className={classes.ppro_icons_riskManagement1}></div>
                      <div className={classes.secondaryButton2}>
                        <div className={classes.textItem2}>View documentation</div>
                        <IconWrapper_UnionTrueSize24px
                          className={classes.iconWrapper4}
                          swap={{
                            wrapper: <WrapperIcon4 className={classes.icon4} />,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.frame1553}>
              <div className={classes.cardContainer3}>
                <div className={classes.cardHover3}>
                  <div className={classes.frame14983}>
                    <div className={classes.frame15493}>
                      <div className={classes.simpleAPI}>Simple API</div>
                      <div className={classes.accessOurMostComprehensiveSuit}>
                        Access our most comprehensive suite of payment methods, automated onboarding and reconciliation
                        services. Meticulously developed, tried, and tested over time.
                      </div>
                    </div>
                    <div className={classes.buttonsContainer3}>
                      <div className={classes.ppro_icons_globalDigital1}></div>
                      <div className={classes.secondaryButton3}>
                        <div className={classes.textItem3}>View documentation</div>
                        <IconWrapper_UnionTrueSize24px
                          className={classes.iconWrapper5}
                          swap={{
                            wrapper: <WrapperIcon5 className={classes.icon5} />,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.cardContainer4}>
                <div className={classes.cardHover4}>
                  <div className={classes.frame14984}>
                    <div className={classes.frame15494}>
                      <div className={classes.acquiringPlatformAsAServiceAPI}>Acquiring Platform as a Service API</div>
                      <div className={classes.implementEndToEndMerchantAcqui}>
                        Implement end-to-end merchant acquiring services and through our orchestration layer deploy
                        hundreds of products from multiple third-party providers.
                      </div>
                    </div>
                    <div className={classes.buttonsContainer4}>
                      <div className={classes.ppro_icons_platform1}></div>
                      <div className={classes.secondaryButton4}>
                        <div className={classes.textItem4}>View documentation</div>
                        <IconWrapper_UnionTrueSize24px
                          className={classes.iconWrapper6}
                          swap={{
                            wrapper: <WrapperIcon6 className={classes.icon6} />,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.leftVisual}>
            <LeftVisualIcon className={classes.icon18} />
          </div>
        </div>
        <div className={classes.cTASection}>
          <div className={classes.leftVisual2}>
            <LeftVisualIcon2 className={classes.icon19} />
          </div>
          <div className={classes.container2}>
            <div className={classes.gettingStartedWithOurGlobalAPI}>
              <div className={classes.textBlock5}>Getting started with our Global API </div>
              <div className={classes.textBlock6}>
                <p className={classes.labelWrapper}>
                  <span className={classes.label7}>is easy and straightforward</span>
                </p>
              </div>
            </div>
            <div className={classes.frame1554}>
              <div className={classes.cardHover5}>
                <div className={classes.frame14985}>
                  <div className={classes.secondaryButton5}>
                    <div className={classes.textItem5}>Contact your account manager</div>
                    <div className={classes.frame1561}>
                      <Frame1561Icon className={classes.icon20} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.cardHover6}>
                <div className={classes.frame14986}>
                  <div className={classes.secondaryButton6}>
                    <div className={classes.textItem6}>Receive Your Credentials</div>
                    <div className={classes.frame1562}>
                      <Frame1562Icon className={classes.icon21} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.cardHover7}>
                <div className={classes.frame14987}>
                  <div className={classes.secondaryButton7}>
                    <div className={classes.textItem7}>Start Integrating our API</div>
                    <div className={classes.frame1563}>
                      <Frame1563Icon className={classes.icon22} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.frame1515}>
              <button className={classes.button3} onClick={() => window?.open(url, '_blank')?.focus()}>
                <div className={classes.tryItNow}>Try it now</div>
                <IconWrapper_UnionTrueSize24px
                  className={classes.iconWrapper7}
                  swap={{
                    wrapper: <WrapperIcon7 className={classes.icon7} />,
                  }}
                />
              </button>
              <button className={classes.button4} onClick={() => window?.open(url, '_blank')?.focus()}>
                <div className={classes.aPIReference2}>API Reference</div>
              </button>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.top}>
            <div className={classes.nav}>
              <div className={classes.navFooterLarge}>
                <div className={classes.inner6}>
                  <div className={classes.column}>
                    <div className={classes.title}>
                      <div className={classes.products}>Products</div>
                    </div>
                    <div className={classes.list}>
                      <NavFooterItem_TypeDefaultScree
                        text={{
                          navLabel: <div className={classes.navLabel5}>PPRO Global API</div>,
                        }}
                      />
                      <NavFooterItem_TypeDefaultScree
                        text={{
                          navLabel: <div className={classes.navLabel6}>Fraud Alerts API</div>,
                        }}
                      />
                      <NavFooterItem_TypeDefaultScree
                        text={{
                          navLabel: <div className={classes.navLabel7}>Chargeback Disputes API</div>,
                        }}
                      />
                      <NavFooterItem_TypeDefaultScree
                        text={{
                          navLabel: <div className={classes.navLabel8}>Simple API</div>,
                        }}
                      />
                      <NavFooterItem_TypeDefaultScree
                        text={{
                          navLabel: <div className={classes.navLabel9}>Acquiring Platform as a Service API</div>,
                        }}
                      />
                    </div>
                  </div>
                  <div className={classes.column2}>
                    <div className={classes.title2}>
                      <div className={classes.paymentMethods}>Payment Methods</div>
                    </div>
                    <div className={classes.list2}>
                      <NavFooterItem_TypeDefaultScree
                        text={{
                          navLabel: <div className={classes.navLabel10}>Asia Pacific</div>,
                        }}
                      />
                      <NavFooterItem_TypeDefaultScree
                        text={{
                          navLabel: (
                            <div className={classes.navLabel11}>
                              <div className={classes.textBlock}>Europe, The Middle </div>
                              <div className={classes.textBlock2}>East and Africa</div>
                            </div>
                          ),
                        }}
                      />
                      <NavFooterItem_TypeDefaultScree
                        text={{
                          navLabel: <div className={classes.navLabel12}>The Americas</div>,
                        }}
                      />
                      <NavFooterItem_TypeDefaultScree
                        text={{
                          navLabel: <div className={classes.navLabel13}>Show All</div>,
                        }}
                      />
                    </div>
                  </div>
                  <div className={classes.column3}>
                    <div className={classes.title3}>
                      <div className={classes.contact}>Contact</div>
                    </div>
                    <div className={classes.list3}>
                      <NavFooterItem_TypeDefaultScree
                        text={{
                          navLabel: <div className={classes.navLabel14}>Contact us</div>,
                        }}
                      />
                      <NavFooterItem_TypeDefaultScree
                        text={{
                          navLabel: <div className={classes.navLabel15}>Tech. support</div>,
                        }}
                      />
                      <NavFooterItem_TypeDefaultScree
                        text={{
                          navLabel: <div className={classes.navLabel16}>Contact PR </div>,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.info}>
              <div className={classes.about}>
                <div className={classes.logo2}>
                  <div className={classes.big}>
                    <BasicLogoPPRO
                      className={classes.basicLogoPPRO}
                      classes={{ ico: classes.ico }}
                      swap={{
                        ico: (
                          <div className={classes.ico}>
                            <IcoIcon className={classes.icon8} />
                          </div>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div className={classes.copy}>
                  <div className={classes.DeveloperHub}>&#123;Developer hub&#125;</div>
                </div>
              </div>
              <div className={classes.social}>
                <div className={classes.item}>
                  <SOME24xTwitterDefault
                    className={classes.sOME24xTwitterDefault}
                    classes={{ bg: classes.bg }}
                    swap={{
                      icoTwitter: <IcoTwitterIcon className={classes.icon9} />,
                    }}
                  />
                </div>
                <div className={classes.item2}>
                  <SOME24xLinkedInDefault
                    className={classes.sOME24xLinkedInDefault}
                    classes={{ bg: classes.bg2 }}
                    swap={{
                      icoLinkedin: <IcoLinkedinIcon className={classes.icon10} />,
                    }}
                  />
                </div>
                <div className={classes.item3}>
                  <SOME24xYouTubeDefault
                    className={classes.sOME24xYouTubeDefault}
                    classes={{ bg: classes.bg3 }}
                    swap={{
                      icoYt: <IcoYtIcon className={classes.icon11} />,
                    }}
                  />
                </div>
                <div className={classes.item4}>
                  <SOME24xInstaDefault
                    className={classes.sOME24xInstaDefault}
                    classes={{ bg: classes.bg4 }}
                    swap={{
                      icoInsta: <IcoInstaIcon className={classes.icon12} />,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.bottom}>
            <div className={classes.copyright}>
              <div className={classes.inner7}>
                <div className={classes.menu}>
                  <div className={classes.itemCopy}>
                    <div className={classes.label8}>
                      <div className={classes.PPRO2022}>©️ PPRO 2022</div>
                    </div>
                  </div>
                  <div className={classes.menu2}>
                    <div className={classes.item5}>
                      <div className={classes.dsiclaimer}>Dsiclaimer</div>
                    </div>
                    <div className={classes.item6}>
                      <div className={classes.privacyNotice}>Privacy notice</div>
                    </div>
                    <div className={classes.item7}>
                      <div className={classes.privacySettings}>Privacy settings</div>
                    </div>
                    <div className={classes.item8}>
                      <div className={classes.pPROEntities}>PPRO entities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
