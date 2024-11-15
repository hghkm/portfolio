import { Box, Fab } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";

export function DownloadResume() {

    function openPDF() {
        const pdfUrl = '/Resume.pdf';
        const newTab = window.open(pdfUrl, '_blank');
        if( !newTab ) {
            alert("Popup blocked. Please allow popups.");
        }
    }

    return (
        <Fab
            title="Download Resume"
            sx={{ position: 'fixed', bottom: 10, right: 10 }}
            onClick={openPDF}
        >
            <DownloadIcon/>
        </Fab>
    )
}