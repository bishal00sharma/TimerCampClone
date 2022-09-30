import { Flex, Grid, Img, Text } from "@chakra-ui/react";
import LogoBar from "../../Components/Login/Logo-bar"

export default function Sidebar() {
    return (
        <Grid boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" alignItems="flex-start" templateRows="7vh 93vh">
            <LogoBar />
            <Grid id="sidebar">
                <Grid h="fit-content"  >
                    <Text>TRACK</Text>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/timesheet.png")} alt="TimeSheet" />
                        <Text>TimeSheet</Text>
                    </Flex>
                </Grid>
                <Grid>
                    <Text>ANALYZE</Text>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/dashboard.png")} alt="TimeSheet" />
                        <Text>Dashboard</Text>
                    </Flex>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/reports.png")} alt="TimeSheet" />
                        <Text>Reports</Text>
                    </Flex>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/computer-time.png")} alt="TimeSheet" />
                        <Text>Computer Time</Text>
                    </Flex>
                </Grid>
                <Grid>
                    <Text>MANAGE</Text>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/projects.png")} alt="TimeSheet" />
                        <Text>Projects</Text>
                    </Flex>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/tags.png")} alt="TimeSheet" />
                        <Text>Tags</Text>
                    </Flex>
                </Grid>
                <Grid>
                    <Text>TEAM</Text>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/users.png")} alt="TimeSheet" />
                        <Text>Users</Text>
                    </Flex>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/attendance.png")} alt="TimeSheet" />
                        <Text>Attendance</Text>
                    </Flex>
                </Grid>
            </Grid>
        </Grid>
    )
}