import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body: {
        padding: 30,
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        padding: 10
    },
    subtitle: {
        fontSize: 15,
        textAlign: 'center',
        padding: 10
    },

})

const PDF = ({ data }) => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.subtitle}>- by {data.authorName}</Text>
                <Text style={styles.text}>{data.description}</Text>
            </Page>
        </Document>
    );
};
export default PDF;