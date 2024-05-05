import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Icon,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { MapPin, X } from "react-feather";
import "./css/styles.css";
export const JobCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
  };
  const handleViewMore = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Card className="job-card">
        <CardContent sx={{ textAlign: "left" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              paddingBottom: "20px",
            }}
          >
            <img style={{ width: "40px", height: "40px" }} src={job.logoUrl} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "300px",
              }}
            >
              <div>
                <p
                  style={{ color: "#8b8b8b", fontWeight: "500" }}
                  className="typography-font"
                >
                  {job.companyName}
                </p>
                <p
                  style={{ textTransform: "capitalize" }}
                  className="typography-font"
                >
                  {job.jobRole}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              textTransform: "capitalize",
              alignItems: "center",
              gap: "2px",
              paddingBottom: "10px",
            }}
          >
            <MapPin size="14px" />{" "}
            <p style={{ fontSize: "14px" }} className="typography-font">
              {" "}
              {job.location}
            </p>
          </div>
          <div>
            <p
              style={{ fontSize: "14px", fontWeight: "400",color:"#8b8b8b",fontSize:"13px", }}
              className="typography-font"
            >
              {" "}
              Estimated Salary: {job.salaryCurrencyCode} ${job.minJdSalary}K - $
              {job.maxJdSalary}K
            </p>
          </div>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: "500",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
            className="typography-font"
          >
            About Company:
          </Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "12px" }}>
            <div className="text-desc">{job.jobDetailsFromCompany}</div>
          </Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "14px" }}>
            <a
              onClick={handleViewMore}
              style={{
                textDecoration: "none",
                color: "blue",
                cursor: "pointer",
              }}
            >
              View More
            </a>
          </Typography>

          <div style={{ marginTop: "10px" }}>
            <Typography sx={{ fontFamily: "Poppins",color:"#8b8b8b",fontSize:"14px", fontWeight: "400" }}>
              Minimum experience :<br></br> {job.minExp || "1"} years
            </Typography>
            
          </div>
        </CardContent>
        <CardActions
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <div>
            <Button
              className="button-apply"
              sx={{
                backgroundColor: "rgb(85, 239, 196)",
                color: "black",
                textTransform: "capitalize",
              }}
              // onClick={handleViewMore}
            >
              <Typography sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                Easy Apply
              </Typography>
            </Button>
          </div>

          <div style={{marginLeft:"0"}}>
            <Button
              className="button-referral"
              sx={{
                backgroundColor: "rgb(42, 105, 221)",
                color: "#fff",
                textTransform: "capitalize",
              }}
            >
              <Typography sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                Unlock Referrals
              </Typography>
            </Button>
          </div>
        </CardActions>
      </Card>

      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "400",
              }}
              component="h2"
            >
              About Company
            </Typography>
            <X
              style={{ cursor: "pointer" }}
              onClick={handleClose}
              size="16px"
            />
          </div>

          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontFamily: "Poppins", fontSize: "13px" }}
          >
            {job.jobDetailsFromCompany}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
