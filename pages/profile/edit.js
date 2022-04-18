import React, { useState, useEffect, useRef } from "react";
import { requireAuth } from "../../components/Container/HOC/requireAuth";
import { wrapper } from "../../redux/store";
import { Box, Heading, Link } from "@chakra-ui/react";
import TopBar from "../../subcomponents/HomePage/topBar";
import EditCard from "../../subcomponents/HomePage/editCard";
import { connect } from "react-redux";
import ProfileModal from "../../subcomponents/HomePage/profileModal";

const Edit = ({ user }) => {
    const { first_name, last_name, username } = user && user.user;

    const { about, profile_picture } = user && user;
    const [formData, setFormData] = useState({
        first_name,
        last_name,
        username,
        about,
        profile_picture,
    });
    const inputImgRef = useRef(null);
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState("");
    const fields = [
        { title: "First Name", name: "first_name" },
        { title: "Last Name", name: "last_name" },
        { title: "Username", name: "username" },
        { title: "About", name: "about" },
    ];
    function readURL() {
        const input = inputImgRef.current;

        if (input !== null) {
            console.log(inputImgRef.current);
            const ext = input.files[0]["name"]
                .substring(input.files[0]["name"].lastIndexOf(".") + 1)
                .toLowerCase();
            if (
                input.files &&
                input.files[0] &&
                (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")
            ) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    setFormData({
                        ...formData,
                        profile_picture: e.target.result,
                    });
                };

                reader.readAsDataURL(input.files[0]);
            } else {
                setError("Incorrect image format");
            }
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleModalChange = (state) => {
        setOpenModal(state);
    };
    const bodyEl = document.querySelector("body");
    useEffect(() => {
        bodyEl.classList.toggle("popup-open", openModal);
    }, [openModal]);

    return (
        <>
            <Box>
                <TopBar editPage={true} />
                <Box
                    px={{ base: "2rem", md: "5rem", lg: "9rem" }}
                    h="100vh"
                    w="100%"
                    mt="8rem"
                >
                    <Heading fontSize="3xl" fontWeight="800" mb="2rem">
                        About You
                    </Heading>

                    {fields.map((field, index) => (
                        <EditCard
                            key={index}
                            field={field}
                            value={formData[field.name]}
                            handleChange={handleChange}
                        />
                    ))}
                    <Link
                        fontSize="md"
                        color="secondary.100"
                        _active={{ color: "secondary.100" }}
                        onClick={() => handleModalChange(true)}
                    >
                        Change Profile Picture
                    </Link>
                </Box>
            </Box>
            {openModal && (
                <ProfileModal
                    url={formData.profile_picture}
                    name={formData.last_name}
                    handleModalChange={handleModalChange}
                    readURL={readURL}
                    ref={inputImgRef}
                />
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    return { user: state.auth.user };
};

export default connect(mapStateToProps, null)(Edit);

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    requireAuth(async (ctx) => {
        return {
            props: {},
        };
    }, store)
);
