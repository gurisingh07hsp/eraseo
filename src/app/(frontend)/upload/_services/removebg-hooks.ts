// import { ALLOWED_IMAGE_TYPES } from '@/config/constants';
// import { queryKeys } from '@/config/queryKeys';
// import { RemoveBgResponse } from '@/server/ai/ai-sevices';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import axios from 'axios';
// import React, { useEffect } from 'react';
// import { toast } from 'sonner';

// import removebgActions from './removebg-actions';

// const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const useRemoveBg = () => {
//   const queryClient = useQueryClient();
//   const [image, setImage] = React.useState<{
//     image: File;
//     preview: string;
//     result?: RemoveBgResponse;
//     hdUrl?: string;
//   } | null>(null);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [showOrignal, setShowOrignal] = React.useState(false);
//   const inputRef = React.useRef<HTMLInputElement>(null);
//   const [progress, setProgress] = React.useState(0);

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const files = e.target.files;
//     if (!files?.length) return;

//     const file = files[0];

//     // Check if the file is an image
//     if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
//       toast.error('Please upload a valid image file.');

//       return;
//     }

//     const preview = URL.createObjectURL(file);

//     setImage({
//       image: file,
//       preview,
//     });

//     if (inputRef.current) {
//       inputRef.current.value = '';
//     }
//   };

//   const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     const files = e.dataTransfer.files;
//     if (!files?.length) return;

//     const file = files[0];

//     // Check if the file is an image
//     if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
//       toast.error('Please upload a valid image file.');

//       return;
//     }

//     const preview = URL.createObjectURL(file);

//     setImage({
//       image: file,
//       preview,
//     });
//   };

//   const onClear = () => {
//     setImage(null);
//     setIsLoading(false);
//     setShowOrignal(false);
//     setProgress(0);
//   };

//   const removeBg = async () => {
//     if (!image) return;
//     setIsLoading(true);
//     setShowOrignal(false);
//     const formData = new FormData();
//     formData.append('image', image?.image as File);

//     try {
//       const response = await axios.post(`/api/ai/remove-image-bg`, formData, {
//         onUploadProgress: (progressEvent) => {
//           const total = progressEvent.total || 1;
//           const current = progressEvent.loaded || 0;
//           const percentCompleted = Math.round((current / total) * 100);
//           setProgress(percentCompleted);
//         },
//       });
//       console.log("Response : ", response);
//       const { data } = response;
//       // setImage((prev) => ({
//       //   ...prev!,
//       //   result: data,
//       // }));
//       setImage((prev) => {
//         if (!prev) return null;

//         return {
//           ...prev,
//           result: data,
//         };
//       });
//     } catch (err: any) {
//       const error = err.response?.data?.message || 'An error occurred';
//       toast.error(error);
//       onClear();
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   console.log("set Image : ", image);

//   const premiumDownloadMutation = useMutation({
//     mutationFn: removebgActions.unlockPremium,
//     onSuccess: async ({ url }) => {
//       setImage((prev) => ({
//         ...prev!,
//         hdUrl: url,
//       }));
//       queryClient.invalidateQueries({ queryKey: [queryKeys.credits] });
//       window.open(url, '_blank');
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });

//   const downloadPremium = async () => {
//     if (!image?.result?.id) return;

//     if (image?.hdUrl) {
//       window.open(image.hdUrl, '_blank');

//       return;
//     }

//     premiumDownloadMutation.mutate(image?.result?.id);
//   };

//   // useEffect(() => {
//   //   if (image && image?.image) {
//   //     removeBg();
//   //   }
//   // }, [image?.image]);

//   useEffect(() => {
//     if (image?.image && !image?.result && !isLoading) {
//       removeBg();
//     }
//   }, [image?.image]);

//   return {
//     progress,
//     image,
//     setImage,
//     onChange,
//     onDrop,
//     onClear,
//     isLoading,
//     showOrignal,
//     setShowOrignal,
//     inputRef,
//     downloadPremium,
//     premiumDownloadMutation,
//   };
// };


'use client';

import { ALLOWED_IMAGE_TYPES } from '@/config/constants';
import { queryKeys } from '@/config/queryKeys';
import { RemoveBgResponse } from '@/server/ai/ai-sevices';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { toast } from 'sonner';

import removebgActions from './removebg-actions';

export const useRemoveBg = () => {
  const queryClient = useQueryClient();

  const [image, setImage] = React.useState('');
  const [localimage, setlocalImage] = React.useState<{
    image: File;
    preview: string;
  } | null>(null);

  const [isLoading, setIsLoading] = React.useState(false);
  const [showOrignal, setShowOrignal] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const removeBg = async (currentImage: {
    image: File;
    preview: string;
  }) => {
    try {
      setIsLoading(true);
      setShowOrignal(false);
      setProgress(0);

      const formData = new FormData();
      formData.append('image', currentImage.image);

      const response = await axios.post(
        '/api/ai/remove-image-bg',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },

          onUploadProgress: (progressEvent) => {
            const total = progressEvent.total || 1;
            const current = progressEvent.loaded || 0;

            const percentCompleted = Math.round(
              (current / total) * 100
            );

            setProgress(percentCompleted);
          },
        }
      );

      console.log('API RESPONSE :', response.data);

      const { data } = response;
      console.log('API data :', data);
      setImage(data.outputUrl);


      // setImage((prev) => {
      //   if (!prev) return null;

      //   return {
      //     ...prev,
      //     result: data,
      //   };
      // });
    } catch (err: any) {
      console.error('REMOVE BG ERROR:', err);
      console.error(err?.response?.data);

      const error =
        err?.response?.data?.message ||
        err?.message ||
        'Something went wrong';

      toast.error(error);

      onClear();
    } finally {
      setIsLoading(false);
    }
  };

  const handleFile = async (file: File) => {
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      toast.error('Please upload a valid image file.');
      return;
    }

    const preview = URL.createObjectURL(file);

    const newImage = {
      image: file,
      preview,
    };

    setlocalImage(newImage);

    await removeBg(newImage);
  };

  const onChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const files = e.target.files;

    if (!files?.length) return;

    const file = files[0];

    await handleFile(file);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const onDrop = async (
    e: React.DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault();

    const files = e.dataTransfer.files;

    if (!files?.length) return;

    const file = files[0];

    await handleFile(file);
  };

  const onClear = () => {
    setlocalImage(null);
    setImage('');
    setIsLoading(false);
    setShowOrignal(false);
    setProgress(0);
  };

  const premiumDownloadMutation = useMutation({
    mutationFn: removebgActions.unlockPremium,

    onSuccess: async ({ url }) => {
      // setImage((prev) => {
      //   if (!prev) return null;

      //   return {
      //     ...prev,
      //     hdUrl: url,
      //   };
      // });

      queryClient.invalidateQueries({
        queryKey: [queryKeys.credits],
      });

      window.open(url, '_blank');
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const downloadPremium = async () => {
    if (!image) return;
    // if (!image?.result?.id) return;

    // if (image?.hdUrl) {
    //   window.open(image.hdUrl, '_blank');
    //   return;
    // }

    // premiumDownloadMutation.mutate(image);
    // premiumDownloadMutation.mutate(image.result.id);
  };

  return {
    progress,
    localimage,
    setlocalImage,
    image,
    setImage,
    onChange,
    onDrop,
    onClear,
    isLoading,
    showOrignal,
    setShowOrignal,
    inputRef,
    downloadPremium,
    premiumDownloadMutation,
  };
};
