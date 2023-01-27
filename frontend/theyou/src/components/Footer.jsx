
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import HomeIcon from '@mui/icons-material/Home';
  import styled from "styled-components";
  
import { mobile } from "../responsive";

  
  const Container = styled.div`
    display: flex;
    padding-left:4rem;
    ${mobile({ flexDirection: "column",paddingLeft:"1.5rem" })}
    
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
//   const Payment = styled.img`
//       width: 50%;
//   `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>TheYou.</Logo>
          <Desc>
          Inspired by the challenges faced by today’s youth in maintaining healthy hair and skin amidst the stress and pollution of the cities, the brand commits to provide products that are effective, yet affordable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookOutlinedIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Shop</ListItem>
            <ListItem>Categories</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Terms & Conditions</ListItem>
            
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <HomeIcon style={{marginRight:"10px"}}/> 4th Floor, Ideal Lab, TBI, Kiet Group of Institutions, Muradnagar, Ghaziabad, U.P.
          </ContactItem>
          <ContactItem>
            <LocalPhoneOutlinedIcon style={{marginRight:"10px"}}/> +91 81711 01987  
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{marginRight:"10px"}} /> care@theyoucare.com
          </ContactItem>
          {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
        </Right>
      </Container>
    );
  };
  
  export default Footer;