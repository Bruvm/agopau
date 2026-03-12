import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { keyframes } from "@mui/system";

const whatsappPopIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.6) translateY(16px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

export default function WhatsAppButton() {
    return (
        <Box
            component="a"
            href="https://wa.me/543534256029"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                position: "fixed",
                bottom: 20,
                right: 20,
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
                cursor: "pointer",
                zIndex: 9999,
                animation: `${whatsappPopIn} 380ms ease-out 350ms both`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "scale(1.1)",
                    boxShadow: "0px 6px 16px rgba(0,0,0,0.35)",
                },
            }}
        >
            <WhatsAppIcon
                style={{ width: 35, height: 35, color: "white" }}
            />
        </Box>
    );
}
