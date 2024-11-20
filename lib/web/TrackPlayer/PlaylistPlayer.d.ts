import { Player } from './Player';
import type { Track } from '../../src/interfaces';
import { RepeatMode } from './RepeatMode';
import { State } from '../../src';
export declare class PlaylistPlayer extends Player {
    protected playlist: Track[];
    protected lastIndex?: number;
    protected _currentIndex?: number;
    protected repeatMode: RepeatMode;
    protected onStateUpdate(state: Exclude<State, State.Error>): Promise<void>;
    protected onTrackEnded(): Promise<void>;
    protected onPlaylistEnded(): void;
    protected get currentIndex(): number | undefined;
    protected set currentIndex(current: number | undefined);
    protected goToIndex(index: number, initialPosition?: number): Promise<void>;
    add(tracks: Track[], insertBeforeIndex?: number): Promise<void>;
    skip(index: number, initialPosition?: number): Promise<void>;
    skipToNext(initialPosition?: number): Promise<void>;
    skipToPrevious(initialPosition?: number): Promise<void>;
    getTrack(index: number): Track | null;
    setRepeatMode(mode: RepeatMode): void;
    getRepeatMode(): RepeatMode;
    remove(indexes: number[]): Promise<void>;
    stop(): Promise<void>;
    reset(): Promise<void>;
    removeUpcomingTracks(): Promise<void>;
    move(fromIndex: number, toIndex: number): Promise<void>;
    updateMetadataForTrack(index: number, metadata: Partial<Track>): void;
    clearNowPlayingMetadata(): void;
    updateNowPlayingMetadata(metadata: Partial<Track>): void;
}
