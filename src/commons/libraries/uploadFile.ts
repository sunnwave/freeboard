import { gql } from '@apollo/client';
import { useState } from 'react';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState('');
}
