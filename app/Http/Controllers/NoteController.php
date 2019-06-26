<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;

class NoteController extends Controller
{
    /**
     * [HttpGet]
     * Show Notes
     */
    public function Index(Request $request)
    {
        # show all notes.
        $note = Note::latest()->get();

        if(count($note) > 0)
        {
            return response()->json(['status' => 200, 'data' => $note]);
        }
        else
        {
            return response()->json(['status' => 404, 'message' => 'Note has not been created!']);
        }
    }

    /**
     * [HttpPost]
     * Save Note
     */
    public function SaveNote(Request $request)
    {
        # Request Form Data
        $title = $request->title;
        $body = $request->body;

        # Check if title already exist.
        $check_note = Note::where('title', $title)->first();
        if($check_note)
        {
            # return response note already exist.
            return response()->json(['status' => 202, 'message' => 'Note already exist!']);
        }
        else
        {
            try
            {
                $data = Note::create([
                    'title' => $title,
                    'body' => $body
                ]);

                return response()->json(['status' => 200, 'data' => $data]);
            }
            catch(\Illuminate\Database\QueryException $ex)
            {
                return response()->json(['status' => 501, 'message' => $ex->errorInfo[2]]);
            }
        }
    }

    /**
     * [HttpGet]
     * Edit Note
     */
    public function EditNote(Request $request, $id)
    {
        # Request Form Data;
        $id = $request->id;

        $note = Note::findOrfail($id);

        return response()->json(['status' => 200, 'data' => $note]);
    }

    /**
     * [HttpPost]
     * Update Note
     */
    public function UpdateNote(Request $request, $id)
    {
        # Request Form Data
        $title = $request->title;
        $body = $request->body;

        # Check if title already exist.
        $check_note = Note::where('title', $title)->first();
        if($check_note)
        {
            if($check_note->id != $id)
            {
                # return response note already exist.
                return response()->json(['status' => 202, 'message' => 'Note already exist!']);
            }
            else
            {
                try
                {
                    $data = Note::find($id)->update([
                        'title' => $title,
                        'body' => $body
                    ]);

                    return response()->json(['status' => 200, 'data' => $data]);
                }
                catch(\Illuminate\Database\QueryException $ex)
                {
                    return response()->json(['status' => 501, 'message' => $ex->errorInfo[2]]);
                }
            }
        }
        else
        {
            try
            {
                $data = Note::find($id)->update([
                    'title' => $title,
                    'body' => $body
                ]);

                return response()->json(['status' => 200, 'data' => $data]);
            }
            catch(\Illuminate\Database\QueryException $ex)
            {
                return response()->json(['status' => 501, 'message' => $ex->errorInfo[2]]);
            }
        }
    }

    /**
     * [HttpDelete]
     * Delete Note
     */
    public function DeleteNote(Request $request, $id)
    {
        # Request Form Data.
        $id = $request->id;

        # Delete Note.
        $note = Note::findOrfail($id)->delete();

        return response()->json(['status' => 200, 'message' => 'Note Deleted!!!']);
    }

    /**
     * [HttpDelete]
     * Remove Notes
     */
    public function RemoveNote(Request $request)
    {
        # Request Note IDs.
        $id = $request->id;

        # Find Note ID and delete
        foreach($id as $ids)
        {
            # Delete Note.
            $note = Note::findOrfail($ids)->delete();
        }

        return response()->json(['status' => 200, 'data' => $id]);
    }
}
