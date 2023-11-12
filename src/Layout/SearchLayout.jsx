
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Search from "../Pages/Search";
import MapPart from "../Pages/MapPart";

const SearchLayout = () => {
    return (
        <Grid2 container  direction={{ md: 'row-reverse' }}>
            <Grid2 xs={12} md={8} xl={7} >
                <MapPart></MapPart>
            </Grid2>
            <Grid2 xs={12} md sx={{ position: { xs: 'absolute', md: 'static' } }} >
                <Search></Search>
            </Grid2>
        </Grid2>
    );
};

export default SearchLayout;