import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Typography, Grid } from '@nelnet/unifi-components-react';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
    const [photoData, setPhotoData] =  useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    if (!photoData) return <div />;

    return (
        <Grid container spacing={2} padding={4}>
            <Grid item xs={12}>
                <NavBar />
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h1" component="h1" gutterBottom>
                        {photoData.title}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    {photoData.media_type === "image" ? (
                        <img 
                        src={photoData.url}
                        alt={photoData.title}
                        className="photo" />
                    ) : (
                        <iframe
                            title="space-video"
                            src={photoData.url}
                            frameBorder="0"
                            allow="encrypted-media"
                            allowFullScreen
                            className="photo" />
                    )}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="overline" component="p" gutterBottom>
                        {photoData.date}
                    </Typography>
                    <Typography variant="body1">
                        {photoData.explanation}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}