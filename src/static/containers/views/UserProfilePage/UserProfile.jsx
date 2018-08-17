import React from "react";

// material-ui components
import InputLabel from "@material-ui/core/InputLabel";

// material-ui-icons
import PermIdentity from "@material-ui/icons/PermIdentity";

// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardBody from "../../../components/Card/Card.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";

import ProfileCard from "../../../components/Card/ProfileCard.jsx";
import IconCard from "../../../components/Card/IconCard.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
import Clearfix from "../../../components/Clearfix/Clearfix.jsx";

import avatar from "../../../images/faces/marc.jpg";
import cardBlog2 from "../../../images/examples/card-blog2.jpg";

function UserProfile({ ...props }) {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardBody>
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Company (disabled)"
                      id="company-disabled"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <ProfileCard
            avatar={avatar}
            subtitle="CEO / CO-FOUNDER"
            title="Alec Thompson"
            description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
            content={
              <Button color="rose" round>
                Follow
              </Button>
            }
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default UserProfile;
