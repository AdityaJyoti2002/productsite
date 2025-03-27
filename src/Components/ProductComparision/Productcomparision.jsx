import React from "react";
import styled from "styled-components";

// Constants
const COLORS = {
  primary: "#43bbcd",
  secondary: "#ffffff",
  text: "#333",
  lightGrey: "lightgrey",
  grey: "gray",
  ecoGreen: "#028845",
  blue: "#2275d3",
};

// Styled components
const ProductComparisonContainer = styled.div`
  margin: 0 auto;
  padding: 30px;
  background-color: ${COLORS.primary};
`;

const Instruction = styled.div`
  text-align: right;
  margin-bottom: 10px;
  display: none;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Em = styled.em`
  color: ${COLORS.lightGrey};
  font-size: 12px;
  font-style: italic;
`;

const ZuiWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const ZuiScroller = styled.div`
  overflow-x: auto;
  padding-bottom: 5px;
  width: 100%;
`;

const ZuiTable = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0;
  width: 100%;
  background-color: ${COLORS.secondary};
`;

const TableHeader = styled.th`
  padding: 15px 20px;
  text-align: left;
  vertical-align: top;
  min-width: 180px;
  background-color: ${COLORS.primary};
  color: ${COLORS.secondary};

  @media screen and (max-width: 768px) {
    min-width: 150px;
  }

  @media screen and (max-width: 480px) {
    min-width: 120px;
  }
`;

const TableData = styled.td`
  color: ${COLORS.text};
  font-size: 16px;
  padding: 15px 20px;
  white-space: normal; /* Allow text to wrap */
  vertical-align: top;
  background-color: #e8eced;
  max-width: 200px; /* Set a max width for the cell */
  overflow: hidden; /* Hide overflow */
  text-overflow: ellipsis; /* Add ellipsis for overflowed text */
  word-wrap: break-word; /* Allow long words to break onto the next line */

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    padding: 10px;
  }
`;

const StickyColumn = styled.td`
  left: 0;
  position: sticky;
  top: auto;
  font-weight: 700;
  min-width: 200px;
  background-color: ${COLORS.secondary};
  box-shadow: inset -15px 0 10px -7px rgba(0, 0, 0, 0.15);
  color: ${COLORS.primary};

  @media screen and (max-width: 768px) {
    min-width: 125px;
  }

  @media screen and (max-width: 480px) {
    min-width: 100px;
  }
`;

const StripeRow = styled(StickyColumn)`
  background-color: #f3f3f3;
  color: ${COLORS.primary};
`;

const ProductImage = styled.img`
  height: 300px;
  width: 250px;
  display: block;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100px;
  }

  @media screen and (max-width: 480px) {
    width: 80px;
  }
`;

const ProductLink = styled.a`
  color: #0371bd;
  text-decoration: none;
`;

const Icon = styled.i`
  display: inline-block;
  font-family: 'Font Awesome 5 Pro';
  font-weight: 500;
  font-size: 23px;
  padding-right: 5px;
`;

const CheckCircle = styled(Icon)`
  color: ${COLORS.ecoGreen};
`;

const PlusCircle = styled(Icon)`
  color: ${COLORS.blue};
`;

const TimesCircle = styled(Icon)`
  color: ${COLORS.grey};
`;

const ProductComparison = () => {
  return (
    <ProductComparisonContainer>
      {/* <h2>Product Comparison Table V2</h2> */}
      <ZuiWrapper>
        <Instruction>
          <Em>
            <i className="fas fa-arrows-alt-h"></i> Swipe for more products
          </Em>
        </Instruction>
        <ZuiScroller>
          <ZuiTable>
            <thead>
              <tr>
                <StickyColumn style={{ background:"#43bbcd", color:"black", fontSize:"20px"}}>Product Comparison Table</StickyColumn>
                <TableHeader id="product-col">
                  <ProductImage
                    src="src/assets/WhatsApp Image 2025-03-28 at 2.30.17 AM.jpeg"
                    alt="Maxwell RSC"
                  />
                  {/* <h5>
                    <ProductLink href="#">
                      Maxwell<sup>&reg;</sup> RSC
                      <span>&#187;</span>
                    </ProductLink>
                  </h5> */}
                </TableHeader>
                <TableHeader>
                  <ProductImage 
                    src="src/assets/WhatsApp Image 2025-03-28 at 2.37.17 AM.jpeg"
                    alt="Maxwell RSC 48"
                  />
                  {/* <h5>
                    <ProductLink href="#">
                      Maxwell<sup>&reg;</sup> RSC 48
                      <span>&#187;</span>
                    </ProductLink>
                  </h5> */}
                </TableHeader>
              </tr>
            </thead>
            <tbody>
            <tr>
                <StickyColumn style={{ color:"black"}}>Feature</StickyColumn>
                <TableData>
                <strong>PowerCard (Lastminutes)</strong>
                </TableData>
                <TableData>
                <strong>Normal Power Bank</strong>
                 
                </TableData>
              </tr>
              <tr>
                <StickyColumn>Size & Portability</StickyColumn>
                <TableData>
                  Ultra-slim (as thin as a credit card), fits in wallet, pocket, or cardholder
                </TableData>
                <TableData>
                  Bulky, heavy, requires extra space in bag
                </TableData>
              </tr>
              <tr>
                <StripeRow>Weight</StripeRow>
                <TableData>Super lightweight (almost like a business card)</TableData>
                <TableData>Heavy and inconvenient to carry</TableData>
              </tr>
              <tr>
                <StickyColumn>Charging Method</StickyColumn>
                <TableData>Wireless & wired fast charging</TableData>
                <TableData>Mostly wired charging</TableData>
              </tr>
              <tr>
                <StripeRow>
                  <ProductLink href="#">
                    Design & Aesthetics
                  </ProductLink>
                </StripeRow>
                <TableData>
                  <CheckCircle className="far fa-check-circle"></CheckCircle>Sleek, stylish, and customizable with branding/logos
                </TableData>
                <TableData>
                  <PlusCircle className="far fa-plus-circle"></PlusCircle>Standard bulky design with no personalization
                </TableData>
              </tr>
              <tr>
                <StickyColumn>Multi-Purpose Use</StickyColumn>
                <TableData>
                  <PlusCircle className="far fa-plus-circle"></PlusCircle>Doubles as a business card (custom branding & QR code)
                </TableData>
                <TableData>
                  <CheckCircle className="far fa-check-circle"></CheckCircle>Only functions as a power bank
                </TableData>
              </tr>
              <tr>
                <StripeRow>Compatibility</StripeRow>
                <TableData>
                  <CheckCircle className="far fa-check-circle"></CheckCircle>Works with all smartphones (Android & iOS), tablets, and USB devices
                </TableData>
                <TableData>
                  <CheckCircle className="far fa-check-circle"></CheckCircle>Compatible but often requires carrying multiple cables
                </TableData>
              </tr>
              <tr>
                <StickyColumn>Eco-Friendliness</StickyColumn>
                <TableData>
                  <CheckCircle className="far fa-check-circle"></CheckCircle>Made from recyclable materials with biodegradable options
                </TableData>
                <TableData>
                  <CheckCircle className="far fa-check-circle"></CheckCircle>Mostly plastic-based with limited eco-friendly designs
                </TableData>
              </tr>
              <tr>
                <StripeRow>Affordability</StripeRow>
                <TableData>
                  <TimesCircle className="far fa-times-circle"></TimesCircle>Budget-friendly (starting at ₹250-₹300)
                </TableData>
                <TableData>
                  <CheckCircle className="far fa-check-circle"></CheckCircle>Higher price (₹500-₹3000) depending on battery size
                </TableData>
              </tr>
              <tr>
                <StickyColumn>Convenience</StickyColumn>
                <TableData>
                  <CheckCircle className="far fa-check-circle"></CheckCircle>Perfect for emergencies, travel, meetings, and daily use
                </TableData>
                <TableData>
                  <CheckCircle className="far fa-check-circle"></CheckCircle>Inconvenient for quick top-ups due to size
                </TableData>
              </tr>
            </tbody>
          </ZuiTable>
        </ZuiScroller>
      </ZuiWrapper>
    </ProductComparisonContainer>
  );
};

export default ProductComparison;