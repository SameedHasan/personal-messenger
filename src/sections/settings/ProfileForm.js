import React from "react";
import * as Yup from "yup";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import FormProvider from "../../../components/hook-form/FormProvider";
// import { RHFTextfield, RHFUploadAvatar } from "../../../components/hook-form";
import { Button, Stack } from "@mui/material";
import { RHFTextfield } from "../../components/hook-form";
import FormProvider from "../../components/hook-form/FormProvider";
// import { LoadingButton } from "@mui/lab";

const ProfileForm = () => {
  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    about: Yup.string().required("About is required"),
    avatarUrl: Yup.string().required("Avatar is required").nullable(true),
  });

  const defaultValues = {
    name: "",
    about: "",
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    // watch,
    // control,
    // setValue,
    handleSubmit,
    // formState: { isSubmitting, isSubmitSuccessful },
  } = methods;

  // const values = watch();

  const onSubmit = async (data) => {
    try {
      //   Send API request
      console.log("DATA", data);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleDrop = useCallback(
  //   (acceptedFiles) => {
  //     const file = acceptedFiles[0];

  //     const newFile = Object.assign(file, {
  //       preview: URL.createObjectURL(file),
  //     });

  //     if (file) {
  //       setValue("avatarUrl", newFile, { shouldValidate: true });
  //     }
  //   },
  //   [setValue]
  // );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        {/* <RHFUploadAvatar
          name="avatarUrl"
          maxSize={3145728}
          onDrop={handleDrop}
        /> */}

        <RHFTextfield
          helperText={"This name is visible to your contacts"}
          name="name"
          label="Full Name"
        />
        <RHFTextfield
          multiline
          rows={3}
          maxRows={5}
          name="about"
          label="About"
        />

        <Stack direction={"row"} justifyContent="end">
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            // loading={isSubmitSuccessful || isSubmitting}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
